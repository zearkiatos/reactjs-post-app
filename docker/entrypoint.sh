
if [ $ENVIRONMENT == "test" ]; then
    npm run dev
else
    npm run build
fi

echo "`date`: 🤖 All ready boss!"
