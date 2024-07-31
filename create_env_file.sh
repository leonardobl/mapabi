if [ -d "./.env" ]; then rm -rf "./.env"; fi

touch .env

echo "VITE_APP_VIACEP_URL=$VIACEP_URL" >> .env
echo "VITE_APP_IBGE_API_URL=$IBGE_API_URL" >> .env
echo "VITE_APP_USUARIOS_API_URL=$USUARIOS_API_URL" >> .env
echo "VITE_APP_API_URL=$MAPA_BI_API_URL" >> .env
echo "VITE_APP_URL=$MAPA_BI_URL" >> .env
echo "VITE_APP_URL_STAGING=$MAPA_BI_API_STAGING_URL" >> .env
echo "VITE_APP_URL_LOCAL=$MAPA_BI_API_LOCAL_URL" >> .env
echo "VITE_APP_ENVIRONMENT=$APP_ENV" >> .env
echo "VITE_APP_PROJECT=$PROJECT" >> .env