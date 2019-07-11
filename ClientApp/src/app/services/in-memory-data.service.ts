import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Tec } from '../models/tec'; 
 
@Injectable({ 
  providedIn: 'root' }) 
export class InMemoryDataService implements InMemoryDbService {createDb() { const Tec = [ 
      { id: 1, nombre: 'Como crear una NO-IP para Mu Online',descripcion:'En este tutorial podrás aprender como crear y configurar tu NO-IP, también podrás aprender que es una IP, dos tipos de IP como funciona y de igual manera la NO-IP Espero sea de tu agrado y hayas aprendido, si tienes algún problema no dudes en comentar este vídeo, no olvides suscribirte al canal, dale me gusta al vídeo. Hasta la próxima clase... Puedes contactarnos en nuestras redes sociales', precioventa: 50000 },
      { id: 2, nombre: 'Como abrir puertos firewall en Windows XP/8.1 para Mu Online',descripcion:'En este tutorial te enseñamos como abrir los puertos en firewall de windows para poder correr tu Mu Online a la perfección. Si tienes dudas no te limites a comentar, comparte este vídeo, dale me gusta y únete a nuestras Redes y a nuestros canal:', precioventa: 27500},
]; 
 return {Tec}; }
       
 genId(tasks: Tec[]): number {
   return tasks.length > 0 ?Math.max(...tasks.map(Tec => Tec.id)) + 1 : 11;
  }
}
