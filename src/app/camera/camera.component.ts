import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ErrorService } from '../services/error.service';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.sass']
})
export class CameraComponent implements OnInit {

  @ViewChild('videoElement')
  videoElement!: ElementRef<HTMLVideoElement>;


  constructor(
    private errorService: ErrorService,
    private deviceService: DeviceService
  ) { }

  ngOnInit(): void {
    console.log('CameraComponent.ngOnInit()');
    this.deviceService.getDevicesCamera().then((devices: MediaDeviceInfo[]) => {
      console.log('camera devices', devices);
    });

    this.deviceService.getDevicesMicrophone().then((devices: MediaDeviceInfo[]) => {
      console.log('microphones devices', devices);
    });

    this.deviceService.getDevicesSpeaker().then((devices: MediaDeviceInfo[]) => {
      console.log('speakers devices', devices);
    });

  }


  async ngAfterViewInit() {
    console.log('CameraComponent.ngAfterViewInit()');
  }

  async startWebcam() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {

        await navigator.mediaDevices.getUserMedia({ video: true }).then((stream: MediaStream) => {
          this.videoElement.nativeElement.srcObject = stream;
        })
        .catch((error: DOMException) => {

          this.errorService.getErrorMessage(error);

        });

    } else {
      console.error('Webcam not supported by this browser.');
    }
  }


  stopWebcam() {
    if (this.videoElement.nativeElement.srcObject) {
      const stream = this.videoElement.nativeElement.srcObject as MediaStream;
      const tracks = stream.getTracks();

      tracks.forEach((track: MediaStreamTrack) => {
        track.stop();
      });

      this.videoElement.nativeElement.srcObject = null;
    }
    else {
      console.error('No webcam stream to stop.');
    }
  }

}
