import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.sass']
})
export class CameraComponent implements OnInit {

  @ViewChild('videoElement')
  videoElement!: ElementRef<HTMLVideoElement>;


  constructor() { }

  ngOnInit(): void {
    console.log('CameraComponent.ngOnInit()');
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
          console.error('Error accessing the webcam:', error);

          switch (error.name ) {
            case 'NotFoundError':
              alert('No se encontró ninguna cámara. Por favor, verifica si tu cámara está conectada y habilitada.');
              break;
            case 'NotReadableError':
              alert('No se puede acceder a la cámara porque está siendo utilizada por otra aplicación. Por favor, cierra cualquier otra aplicación que pueda estar usando la cámara e intenta nuevamente.');
              break;
            case 'OverconstrainedError':
              alert('No se puede acceder a la cámara con las restricciones especificadas. Por favor, verifica las restricciones y vuelve a intentarlo.');
              break;
            case 'SecurityError':
              alert('El acceso a la cámara está bloqueado por razones de seguridad. Asegúrate de que la página esté cargada a través de una conexión segura (HTTPS).');
              break;
            case 'NotAllowedError':
              alert('El acceso a la cámara ha sido denegado. Por favor, permite el acceso a la cámara cuando se solicite.');
              break;
            default:
              alert('No se puede acceder a la cámara. Por favor, verifica si tu cámara está conectada y habilitada.');
              break;

          }
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
