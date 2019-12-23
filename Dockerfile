############################################################
# Dockerfile para configurar aplicación en node.js - Express
############################################################

# Establece la imagen base
FROM node

# Información de Metadata
LABEL "cl.apgca.appNode"="PTI PROJECT SERVER"
LABEL version="1.0"


# Crear directorio de trabajo
RUN mkdir -p /opt/app

# Crea volum tomcat dins de /opt/app
VOLUME ["/opt/app/tomcat"]

# Se estable el directorio de trabajo
WORKDIR /opt/app

# Instala los paquetes existentes en el package.json
COPY index.html ./index.html
RUN npm install node --quiet
#RUN npm i -g pm2
#RUN pm2 start index.js
COPY package.json ./
COPY public/* ./public/
RUN npm install --quiet


COPY *.js ./
# Expone la aplicación en el puerto 8000
EXPOSE 8000

# Inicia la aplicación al iniciar al contenedor
CMD npm start
