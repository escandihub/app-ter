export interface Rumiante{
  id: number;
  nombre: string;
  sexo: boolean;
  edad: number,
  nacimiento: string; //this is a date
  razaID: number;
}; 

// interfaz para mostrar puro texto 
export interface Bovino{
  id: number,
  nombre: string,
  nacimiento: string,
  edad: number,
  raza: string,
  razaID: number,
  grupo: string
};

export interface showRumiante{
  id: number,
  nombre: string,
  raza: string
}
// export interface RumianteInsert{
//   id: number;
//   nombre: string;
//   sexo: boolean;
//   nacimiento: string; //this is a date
//   raza_id: number; 
//   grupo_id: number;
// } 

//esto va pero en el INSERT
// perfilFrom = new FormGroup({
//   nombre: new FormControl( '', Validators.required),
//   edad: new FormControl(''),
//   nacimiento: new FormControl(''),
//   raza: new FormControl(''),
//   vendido: new FormControl('')
// });
//  {{ perfilFrom.get('nombre').value }}