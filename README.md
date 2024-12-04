Guide:
Copy and paste all three files in a folder (ex. djangoreact)

    
2.Backend development workflow
--Run these commands in djangoreact\backend

    Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
    .\env\Scripts\activate
    virtualenv env
    source env/bin/activate
    pip install -r requirements.txt
    python manage.py runserver
3.Frontend development workflow
--Run these commands in djangoreact\frontend\myapp

    Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
    .\env\Scripts\activate
    npm i
    npm start

4.Nodemailer
--Run these command in djangoreact\frontend

    node nodemail.js
