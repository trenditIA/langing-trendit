# Configuración de EmailJS para el formulario de contacto

Este documento explica cómo configurar EmailJS para que el formulario de contacto envíe emails correctamente.

## Pasos de configuración

### 1. Crear una cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta gratuita (permite hasta 200 emails/mes)
3. Verifica tu cuenta si es necesario

### 2. Configurar un servicio de email

1. En el dashboard de EmailJS, ve a **Email Services**
2. Haz clic en **Add New Service**
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta
5. **Anota el Service ID** que se genera (lo necesitarás después)

### 3. Crear un template de email

1. Ve a **Email Templates**
2. Haz clic en **Create New Template**
3. Configura el template de la siguiente manera:

**Template ID**: Anota el ID que se genera (ej: `template_xxxxx`)

**To Email**: `ventas@trendit.com.ar`
*(Este es el email al que se enviarán todos los formularios)*

**From Name**: `{{from_name}}` o `Trendit Website`
*(Nombre que aparecerá como remitente)*

**From Email**: `{{from_email}}` o tu email de EmailJS
*(Email del remitente - usa el de EmailJS si tu servicio no permite emails personalizados)*

**Reply To**: `{{from_email}}`
*(Para que las respuestas vayan al cliente)*

**Asunto (Subject)**:
```
Nueva consulta - {{servicio}}
```

**Contenido (Content)**:
```
{{message_html}}
```

**IMPORTANTE**: 
- En la configuración del template, asegúrate de que la variable `message_html` esté configurada como tipo **"HTML"** en lugar de "Texto", para que el HTML se renderice correctamente.
- El campo "To Email" debe estar configurado como `ventas@trendit.com.ar` en el template de EmailJS.

### 4. Obtener tu Public Key

1. Ve a **Account** > **General**
2. Encuentra tu **Public Key** (también llamado API Key)
3. **Cópiala** (la necesitarás para el archivo .env)

### 5. Configurar las variables de entorno

1. En la raíz del proyecto, crea un archivo llamado `.env`
2. Agrega las siguientes variables con tus valores:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

3. Reemplaza los valores con los que obtuviste en los pasos anteriores:
   - `VITE_EMAILJS_SERVICE_ID`: El Service ID del paso 2
   - `VITE_EMAILJS_TEMPLATE_ID`: El Template ID del paso 3
   - `VITE_EMAILJS_PUBLIC_KEY`: La Public Key del paso 4

### 6. Reiniciar el servidor de desarrollo

Después de crear el archivo `.env`, reinicia el servidor de desarrollo:

```bash
npm run dev
```

## Verificación

Una vez configurado:

1. Abre el formulario de contacto en tu aplicación
2. Completa y envía el formulario
3. Verifica que recibas el email en `ventas@trendit.com.ar`

El email debería llegar con un diseño profesional que incluye:
- Header con el logo/colores de Trendit
- Información de contacto del cliente
- Servicio de interés
- Mensaje completo
- Footer con información de la empresa

## Solución de problemas

### El email no se envía

- Verifica que todas las variables de entorno estén configuradas correctamente
- Asegúrate de que el archivo `.env` esté en la raíz del proyecto
- Verifica que el servidor se haya reiniciado después de crear el `.env`
- Revisa la consola del navegador para ver errores

### El email llega pero sin formato HTML

- Verifica que en el template de EmailJS, la variable `message_html` esté configurada como tipo **"HTML"**
- Asegúrate de que el template use `{{message_html}}` (con dobles llaves)

### Error de autenticación

- Verifica que tu Public Key sea correcta
- Asegúrate de que el servicio de email esté correctamente conectado en EmailJS

## Notas importantes

- El email se envía a: `ventas@trendit.com.ar`
- El plan gratuito de EmailJS permite hasta 200 emails por mes
- Los emails incluyen todos los datos del formulario en un diseño HTML profesional
- El diseño del email coincide con la identidad visual de Trendit

