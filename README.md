# Real de Catorce - Landing Page

Landing page profesional para Real de Catorce, empresa especializada en logística y abastecimiento alimentario para organizaciones públicas y empresas.

## 🚀 Tecnologías

- **React 18.3.1** - Biblioteca de UI
- **Vite 6.3.5** - Build tool y dev server
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Framework de estilos
- **Radix UI** - Componentes UI accesibles
- **Material UI** - Componentes adicionales de UI

## 📋 Requisitos Previos

- Node.js 18 o superior
- npm 9 o superior

## 🛠️ Instalación y Desarrollo Local

1. **Clonar el repositorio**
```bash
git clone <URL_DEL_REPOSITORIO>
cd R14_SPA
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

El servidor de desarrollo se ejecutará en `http://localhost:5173/`

## 🏗️ Build para Producción

```bash
npm run build
```

Los archivos de producción se generarán en la carpeta `dist/`

Para previsualizar el build localmente:
```bash
npm run preview
```

## 📦 Deployment

### Netlify (Recomendado para pruebas)

1. **Conectar con GitHub:**
   - Subir el código a GitHub
   - Ir a [Netlify](https://netlify.com)
   - Click en "Add new site" → "Import an existing project"
   - Conectar con GitHub y seleccionar el repositorio

2. **Configuración automática:**
   - Netlify detectará automáticamente la configuración de `netlify.toml`
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Deploy:**
   - Click en "Deploy site"
   - La URL de prueba será generada automáticamente

### Deploy Manual desde CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

## 🌐 Opciones de Hosting para Producción

### Recomendación para Múltiples SPAs

Para manejar múltiples SPAs con dominio personalizado, las mejores opciones son:

#### 1. **AWS Amplify** (Recomendado si ya conoces AWS)
- ✅ Integración perfecta con AWS
- ✅ CI/CD automático desde Git
- ✅ CDN global (CloudFront)
- ✅ SSL gratuito
- ✅ Múltiples SPAs en un solo proyecto
- ✅ Custom domains fácil
- 💲 ~$1-5/mes por app (dependiendo del tráfico)

**Configuración:**
1. Ir a AWS Amplify Console
2. Conectar repositorio de GitHub
3. Configuración automática detectará Vite
4. Agregar dominio personalizado desde la consola

#### 2. **AWS S3 + CloudFront** (Más económico)
- ✅ Más económico (~$1-3/mes por SPA)
- ✅ Control total
- ✅ Escalabilidad infinita
- ⚠️ Requiere configuración manual

**Ventajas para múltiples SPAs:**
- Puedes tener múltiples buckets S3 (uno por SPA)
- Usar subdominios con Route 53
- Ejemplo: app1.tudominio.com, app2.tudominio.com

#### 3. **Vercel**
- ✅ Deploy instantáneo
- ✅ Preview deployments automáticos
- ✅ Excelente DX (Developer Experience)
- 💲 Plan Pro: $20/mes (múltiples proyectos)

#### 4. **Netlify**
- ✅ Muy fácil de usar
- ✅ CI/CD automático
- ✅ Formularios y funciones serverless incluidas
- 💲 Plan Pro: $19/mes (múltiples sites)

### Mi Recomendación para tu caso:

**Para Desarrollo/Testing:** Netlify (gratuito, fácil, rápido)

**Para Producción con múltiples SPAs:**
1. **AWS Amplify** - Si quieres mantener todo en AWS y tener CI/CD automático
2. **AWS S3 + CloudFront + Route 53** - Si quieres el costo más bajo y no te molesta la configuración inicial

**Estructura sugerida en AWS:**
```
tudominio.com (sitio principal)
├── app1.tudominio.com → S3 Bucket 1 + CloudFront
├── app2.tudominio.com → S3 Bucket 2 + CloudFront
└── app3.tudominio.com → S3 Bucket 3 + CloudFront
```

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Genera el build de producción
- `npm run preview` - Previsualiza el build localmente
- `npm run serve` - Servidor de preview en puerto 4173

## 🔒 Variables de Entorno

Si necesitas variables de entorno, crea un archivo `.env` en la raíz:

```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=Real de Catorce
```

Accede a ellas en el código con: `import.meta.env.VITE_API_URL`

## 📞 Contacto

Para consultas sobre el proyecto o la empresa:
- Email: contacto@realcatorce.com
- Ubicación: Córdoba, Argentina

## 📄 Licencia

Este proyecto es privado y confidencial de Real de Catorce.

---

Desarrollado con ❤️ para Real de Catorce
