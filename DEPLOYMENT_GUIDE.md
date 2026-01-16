# 🚀 Guía Rápida de Deployment

## Pasos para subir a GitHub

1. **Crear repositorio en GitHub**
   - Ve a https://github.com/new
   - Nombre sugerido: `r14-landing-page`
   - Déjalo **privado** (es recomendable para proyectos de clientes)
   - **NO** inicialices con README (ya tienes uno)

2. **Conectar tu repositorio local con GitHub**
   ```bash
   git remote add origin https://github.com/TU_USUARIO/r14-landing-page.git
   git branch -M main
   git push -u origin main
   ```

3. **Verificar que se subió correctamente**
   - Refresca la página de tu repositorio en GitHub
   - Deberías ver todos los archivos

## 🌐 Deploy a Netlify (Testing)

### Opción 1: Desde GitHub (Recomendado)

1. **Conectar con Netlify**
   - Ve a https://app.netlify.com
   - Crea una cuenta o inicia sesión
   - Click en "Add new site" → "Import an existing project"
   - Selecciona "GitHub"

2. **Autorizar acceso**
   - Autoriza a Netlify a acceder a tus repositorios
   - Selecciona el repositorio `r14-landing-page`

3. **Configuración (automática)**
   - Netlify detectará `netlify.toml` automáticamente
   - Build command: `npm run build` ✅
   - Publish directory: `dist` ✅
   - Click en "Deploy site"

4. **Obtener URL**
   - Netlify generará una URL como: `https://random-name-123456.netlify.app`
   - Puedes cambiar el nombre en: Site settings → Site details → Change site name

### Opción 2: Deploy Manual desde CLI

```bash
# Instalar CLI de Netlify
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

## 🏭 Deploy a Producción (Dominio Real)

### Opción A: AWS Amplify (Recomendado para ti)

**Por qué AWS Amplify:**
- Ya conoces AWS
- CI/CD automático
- Múltiples SPAs fácilmente
- ~$1-5/mes por SPA
- Custom domains incluido

**Pasos:**

1. **Ir a AWS Amplify Console**
   - https://console.aws.amazon.com/amplify
   - Click en "New app" → "Host web app"

2. **Conectar GitHub**
   - Selecciona "GitHub"
   - Autoriza acceso
   - Selecciona tu repositorio

3. **Configuración (auto-detectada)**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
   (Amplify detecta esto automáticamente)

4. **Deploy**
   - Click en "Save and deploy"
   - Amplify construirá y deployará automáticamente
   - URL: `https://main.xxxx.amplifyapp.com`

5. **Agregar dominio personalizado**
   - En tu app, ve a "Domain management"
   - Click en "Add domain"
   - Sigue los pasos para configurar DNS

### Opción B: AWS S3 + CloudFront (Más económico)

**Ventajas:**
- Súper económico (~$1-3/mes)
- Escalable infinitamente
- Control total

**Pasos básicos:**

1. **Crear bucket S3**
   ```bash
   aws s3 mb s3://r14-landing-page
   ```

2. **Build y upload**
   ```bash
   npm run build
   aws s3 sync dist/ s3://r14-landing-page --delete
   ```

3. **Configurar S3 para hosting**
   - Habilitar "Static website hosting"
   - Index document: `index.html`
   - Error document: `index.html` (para SPA)

4. **Crear distribución CloudFront**
   - Origin: Tu bucket S3
   - Default root object: `index.html`
   - Custom error response: 404 → `/index.html` (200)

5. **Configurar dominio con Route 53**
   - Crear hosted zone para tu dominio
   - Agregar registro A (Alias) apuntando a CloudFront

## 🔄 CI/CD Automático

### Con Netlify o Amplify:
- Cada push a `main` → Deploy automático
- Pull requests → Preview deployment
- No necesitas hacer nada extra

### Con S3:
Puedes usar GitHub Actions:

```yaml
# .github/workflows/deploy.yml
name: Deploy to S3
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: jakejarvis/s3-sync-action@master
        with:
          args: --delete
        env:
          AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          SOURCE_DIR: 'dist'
```

## 📊 Comparación de Costos (Estimado para ~10,000 visitas/mes)

| Solución | Costo Mensual | Setup | CI/CD | Custom Domain |
|----------|---------------|-------|-------|---------------|
| **Netlify Free** | $0 | ⭐⭐⭐⭐⭐ | ✅ | ❌ |
| **Netlify Pro** | $19 | ⭐⭐⭐⭐⭐ | ✅ | ✅ (múltiples) |
| **AWS Amplify** | $1-5 | ⭐⭐⭐⭐ | ✅ | ✅ |
| **AWS S3+CloudFront** | $1-3 | ⭐⭐ | ⚠️ (manual) | ✅ |
| **Vercel Pro** | $20 | ⭐⭐⭐⭐⭐ | ✅ | ✅ (múltiples) |

## 🎯 Mi Recomendación Final

Para tu caso específico (múltiples SPAs + conocimientos AWS):

1. **Testing/Staging:** Netlify (gratis, ya está configurado)
2. **Producción:** AWS Amplify (barato, fácil, integrado con AWS)

**Estructura ideal:**
```
┌─────────────────────────────────────┐
│          Tu Dominio Principal        │
│         www.realcatorce.com         │
└─────────────────────────────────────┘
                  │
        ┌─────────┴─────────┐
        │     Route 53      │ (DNS)
        └───────────────────┘
                  │
    ┌─────────────┼─────────────┐
    │             │             │
┌───▼───┐    ┌───▼───┐    ┌───▼───┐
│ SPA 1 │    │ SPA 2 │    │ SPA 3 │
│Amplify│    │Amplify│    │Amplify│
└───────┘    └───────┘    └───────┘
   $2/m        $2/m         $2/m
```

**Total: ~$6-10/mes para 3 SPAs con dominio personalizado**

## ❓ Soporte

Si tienes problemas:
- Netlify: https://docs.netlify.com
- AWS Amplify: https://docs.amplify.aws
- Contacto: El AI que configuró este proyecto 😊

