## Cliente Gateway
El gateway es el punto de comunicacion entre nustros clientes y diferentes microservicios.
Es el encargado de recibir las peticione, enviarlas a los servicios correspondientes y 
devolver la respuesta la cliente. 

## Dev
  1. Clonar el repositorio
  2. Instalar instancias
  3. Crear archivo `.env` basado en `env.template`
  4. Tener Levantados microservicios
  5. Levantar proyecto con `npm sun start:dev`

## Nats 
`docker run -d --name nasts-server -p 4222:4222 -p 8222:8222 nats`