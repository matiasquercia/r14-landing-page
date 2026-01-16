# ⚡ Quick Start - Próximos Pasos

## ✅ Estado Actual del Proyecto

- ✅ Dependencias instaladas
- ✅ Servidor de desarrollo funcionando en http://localhost:5173/
- ✅ Git inicializado con commits
- ✅ Configuración de Netlify lista
- ✅ TypeScript configurado
- ✅ Tailwind CSS configurado

## 🎯 Próximos Pasos Inmediatos

### 1. Verificar que el servidor funciona (si no está corriendo)

```bash
cd "c:\Users\maty1\Documents\Home\Proyectos\Real de 14\R14_SPA"
npm run dev
```

Abre tu navegador en: **http://localhost:5173/**

### 2. Subir a GitHub

```bash
# Crear un nuevo repositorio en GitHub primero (https://github.com/new)
# Luego ejecuta estos comandos:

git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPO.git
git branch -M main
git push -u origin main
```

**Reemplaza:**
- `TU_USUARIO` con tu usuario de GitHub
- `NOMBRE_REPO` con el nombre que le pusiste al repositorio

### 3. Deploy a Netlify (Testing)

**Opción A: Desde la Web (Más fácil)**
1. Ve a https://app.netlify.com
2. Click en "Add new site" → "Import an existing project"
3. Selecciona GitHub y tu repositorio
4. Click en "Deploy site"
5. ¡Listo! Tendrás una URL como: `https://tu-sitio.netlify.app`

**Opción B: Desde la línea de comandos**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### 4. Build de Producción (Local)

Para generar los archivos optimizados:

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`

Para previsualizar el build:

```bash
npm run preview
```

## 📝 Comandos Útiles

```bash
# Desarrollo
npm run dev              # Iniciar servidor de desarrollo

# Build
npm run build            # Crear build de producción
npm run preview          # Previsualizar build localmente

# Git
git status               # Ver estado de archivos
git add .               # Agregar todos los cambios
git commit -m "mensaje"  # Crear commit
git push                 # Subir a GitHub

# Ver logs del servidor
# El servidor de desarrollo muestra los cambios en tiempo real
```

## 🐛 Solución de Problemas

### El servidor no inicia
```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Error de permisos en PowerShell
```powershell
# Ejecutar PowerShell como administrador:
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### Error con puertos ocupados
El servidor usa el puerto 5173 por defecto. Si está ocupado, Vite usará el siguiente disponible.

## 📂 Estructura del Proyecto

```
R14_SPA/
├── src/
│   ├── app/
│   │   ├── App.tsx          # Componente principal
│   │   └── components/      # Todos los componentes
│   ├── assets/              # Imágenes y recursos
│   ├── styles/              # Estilos CSS
│   └── main.tsx             # Punto de entrada
├── dist/                    # Build de producción (generado)
├── node_modules/            # Dependencias (no subir a Git)
├── index.html               # HTML principal
├── package.json             # Configuración y dependencias
├── vite.config.ts          # Configuración de Vite
├── tsconfig.json           # Configuración de TypeScript
├── netlify.toml            # Configuración de Netlify
├── .gitignore              # Archivos ignorados por Git
├── README.md               # Documentación principal
├── DEPLOYMENT_GUIDE.md     # Guía detallada de deployment
└── QUICK_START.md          # Esta guía rápida
```

## 🔥 Tips Profesionales

1. **Branches para features:**
   ```bash
   git checkout -b feature/nueva-funcionalidad
   # Trabaja en tu feature
   git add .
   git commit -m "Add: nueva funcionalidad"
   git push origin feature/nueva-funcionalidad
   ```

2. **Variables de entorno:**
   Crea un archivo `.env` para variables locales:
   ```env
   VITE_API_URL=https://api.example.com
   ```

3. **Hot Module Replacement:**
   Vite recarga automáticamente los cambios. No necesitas refrescar el navegador.

4. **Build antes de deploy:**
   Siempre prueba el build localmente antes de deployar:
   ```bash
   npm run build
   npm run preview
   ```

## 📞 Necesitas Ayuda?

- 📖 Lee el [README.md](./README.md) para documentación completa
- 🚀 Consulta [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) para deployment detallado
- 🌐 Vite docs: https://vitejs.dev
- ⚛️ React docs: https://react.dev
- 🎨 Tailwind docs: https://tailwindcss.com

---

¡Éxito con tu proyecto! 🎉

