echo "$ENVIRONMENT"

if [ $(echo "$ENVIRONMENT")=="test" ]
then
    npm run dev
else
    npm run build
    npm run start
fi

echo "`date`: 🤖 All ready boss!"
