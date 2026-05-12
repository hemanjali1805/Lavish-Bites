# Lavish Bites

A modern, elegant food ordering web application with a pastel lavender theme.

## Features

- Splash screen with smooth animations
- User authentication (login/signup)
- Home page with food categories
- Category pages with product listings
- Shopping cart functionality
- Order placement with payment options
- Responsive design
- Toast notifications

## Tech Stack

- **Frontend:** React.js, React Router, Axios, React Toastify
- **Backend:** Node.js, Express.js, MongoDB, JWT
- **Styling:** CSS with pastel lavender theme

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or cloud instance)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the backend directory with:
   ```
   MONGO_URI=mongodb://localhost:27017/lavishbites
   JWT_SECRET=your_jwt_secret_here
   ```

4. Seed the database with sample products:
   ```
   npm run seed
   ```

5. Start the backend server:
   ```
   npm run dev
   ```
   The server will run on ploying...
==> Setting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance
==> Running 'node server.js'
Server running on port 10000
MongoServerError: bad auth : authentication failed
    at Connection.onMessage (/opt/render/project/src/backend/node_modules/mongodb/lib/cmap/connection.js:202:26)
    at MessageStream.<anonymous> (/opt/render/project/src/backend/node_modules/mongodb/lib/cmap/connection.js:61:60)
    at MessageStream.emit (node:events:508:28)
    at processIncomingData (/opt/render/project/src/backend/node_modules/mongodb/lib/cmap/message_stream.js:124:16)
    at MessageStream._write (/opt/render/project/src/backend/node_modules/mongodb/lib/cmap/message_stream.js:33:9)
    at writeOrBuffer (node:internal/streams/writable:570:12)
    at _write (node:internal/streams/writable:499:10)
    at Writable.write (node:internal/streams/writable:508:10)
    at TLSSocket.ondata (node:internal/streams/readable:1012:24)
    at TLSSocket.emit (node:events:508:28) {
  ok: 0,
  code: 8000,
  codeName: 'AtlasError',
  connectionGeneration: 0,
  Symbol(errorLabels): Set(2) { 'HandshakeError', 'ResetPool' }
}
==> Your service is live 🎉
==> 
==> ///////////////////////////////////////////////////////////
==> 
==> Available at your primary URL https://lavish-bites-backend.onrender.com
==> 
==> ///////////////////////////////////////////////////////////
==> Deploying...
==> Setting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance
==> Running 'node server.js'
Server running on port 10000
MongoServerError: bad auth : authentication failed
    at Connection.onMessage (/opt/render/project/src/backend/node_modules/mongodb/lib/cmap/connection.js:202:26)
    at MessageStream.<anonymous> (/opt/render/project/src/backend/node_modules/mongodb/lib/cmap/connection.js:61:60)
    at MessageStream.emit (node:events:508:28)
    at processIncomingData (/opt/render/project/src/backend/node_modules/mongodb/lib/cmap/message_stream.js:124:16)
    at MessageStream._write (/opt/render/project/src/backend/node_modules/mongodb/lib/cmap/message_stream.js:33:9)
    at writeOrBuffer (node:internal/streams/writable:570:12)
    at _write (node:internal/streams/writable:499:10)
    at Writable.write (node:internal/streams/writable:508:10)
    at TLSSocket.ondata (node:internal/streams/readable:1012:24)
    at TLSSocket.emit (node:events:508:28) {
  ok: 0,
  code: 8000,
  codeName: 'AtlasError',
  connectionGeneration: 0,
  Symbol(errorLabels): Set(2) { 'HandshakeError', 'ResetPool' }
}

MongoServerError: bad auth : authentication failed means your app is connecting to MongoDB Atlas, but the username/password in the connection string is wrong.

Check these step by step:

Open MongoDB Atlas

Go to:

Database Access

Check your database user

Either:

copy the exact username/password
OR

create a new user

Example:

Username: lavishbites

Password: Lavish@123

Now open your Render dashboard:

Render Dashboard

Go to your service:

Environment

Find MONGO_URI

It should look like this:

MONGO_URI=mongodb+srv://lavishbites:Lavish%40123@cluster0.xxxxx.mongodb.net/lavishbites?retryWrites=true&w=majority
IMPORTANT:

If password contains @
replace with %40

If password contains #
replace with %23

Example:

Password: abc@123
Becomes: abc%40123
Also check this:

In Atlas → Network Access
Add:

0.0.0.0/0
This allows Render to connect.

After changing:

Save in Render

Click Manual Deploy

Deploy latest commit

If still failing, send your mongoose.connect(...) code (hide password) and I’ll tell exactly what is wrong.


after deploy em cheyali

After deploy successful ayyaka ila check cheyyi:

Open your website:

Lavish Bites Deployment

Browser lo:

Home page open avuthundha?

Errors vasthunnaya?

If page load avvakapothe:

Render → Logs open cheyyi

MongoDB error undo ledo check cheyyi

MongoDB connect ayithe logs lo ila vasthundi:

MongoDB Connected
Next test cheyyalsinavi:

Signup

Login

Add to cart

Database lo data save avuthundha

MongoDB Atlas lo verify cheyyi:

Clusters

Browse Collections

User data vachindha

If frontend blank ga vasthe:

Browser → Right click

Inspect

Console tab

Red color errors screenshot pampu

If backend issue unte:

Render logs screenshot pampu

Appudu exact next fix cheptha.


web site cannot get ani vastundhi

Cannot GET / ante server run avuthundhi but root route (/) ki response ledhu. Usually idi backend-only app deploy ayinappudu vastundhi.

Mee project structure lo frontend and backend separate folders unnayi kabatti, mostly frontend deploy avvaledhu.

Ippudu ila cheyyi:

Option 1 — Frontend separate ga deploy cheyyi (recommended)
Render lo:

New +

Static Site

Same GitHub repo select cheyyi

Settings:

Root Directory: frontend
Build Command: npm install && npm run build
Publish Directory: build
If React Vite use chesthe:

Publish Directory: dist
Tarvata deploy cheyyi.

Option 2 — Backend lo frontend serve cheyyi
server.js lo idi add cheyyi:

const path = require("path");

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});
And frontend build generate cheyyi:

cd frontend
npm run build
Then Git push + redeploy.

Also check:

React use chesthunava?

Vite or CRA?

Folder structure screenshot unte easy ga exact cheptha.


naku step to step chepu

Sare, step by step cheptha. Mee project lo frontend separate ga deploy cheddam. Easy method idi.

STEP 1 — Open Render
Render Dashboard

STEP 2 — Create Frontend Service
Click New +

Select Static Site

STEP 3 — Connect GitHub Repo
Your repo select cheyyi:
Lavish-Bites

STEP 4 — Fill Settings
Ivi exact ga enter cheyyi:

Name: lavish-bites-frontend
Root Directory: frontend
Build Command: npm install && npm run build
Publish Directory: build
IMPORTANT:

If React Vite use chesthe:
Publish Directory = dist

If normal React app (create-react-app) use chesthe:
Publish Directory = build

STEP 5 — Deploy
Click Create Static Site

Wait 2–5 mins

STEP 6 — If Build Failed
Render logs open cheyyi.

Mostly issue:

npm run build
fail avuthundhi.

Appudu:

repo lo frontend/package.json undha check cheyyi

"build" script undha check cheyyi

Example:

"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build"
}
STEP 7 — Backend API URL Change
Frontend localhost use chesthe work avvadhu.

Frontend lo search cheyyi:

http://localhost:5000
Danni replace cheyyi with your backend URL:

https://lavish-bites-backend.onrender.com
Then:

git add .
git commit -m "updated api url"
git push
Render automatic ga redeploy chesthundhi.

STEP 8 — Open Website
Deploy ayyaka Render oka URL istundhi.

Example:

https://lavish-bites-frontend.onrender.com
Adhi open cheyyi.

If ekkada error vachina:

screenshot pampu

or logs pampu

Direct next step cheptha.


IMPORTANT:

If React Vite use chesthe:
Publish Directory = dist

If normal React app (create-react-app) use chesthe:
Publish Directory = build

Mee project Vite aa leka normal React aa ani ila check cheyyi:

GitHub lo or local project lo:
frontend/package.json open cheyyi.

Akkada dependencies/scripts lo idi unte:

Vite Project
"vite": "^..."
or scripts ila untayi:

"dev": "vite",
"build": "vite build"
➡️ Then use:

Publish Directory: dist
Normal React (CRA)
scripts ila untayi:

"start": "react-scripts start",
"build": "react-scripts build"
➡️ Then use:

Publish Directory: build
Quick shortcut:

frontend folder lo:

vite.config.js unte → Vite → dist

lekapothe mostly → build

Mee package.json screenshot/code pampithe nenu exact ga cheptha.


{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/dom": "^10.4.1",
    "@testing-library/jest-dom": "^6.9.1",
    "@testing-library/react": "^16.3.2",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.15.0",
    "react": "^19.2.5",
    "react-dom": "^19.2.5",
    "react-router-dom": "^7.14.0",
    "react-scripts": "5.0.1",
    "react-toastify": "^11.0.5",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

Mee project normal React (react-scripts) use chesthundhi.

Kabatti Render lo:

Publish Directory: build
use cheyyali ✅

Ippudu final settings ila untayi:

Root Directory: frontend
Build Command: npm install && npm run build
Publish Directory: build
Tarvata:

Click Create Static Site

Deploy complete avvadaniki wait cheyyi

URL open cheyyi

If build fail ayithe Render logs pampu.


loning from https://github.com/hemanjali1805/Lavish-Bites
==> Checking out commit bce955e445c8feb437194d59cdb85f78d5d80451 in branch main
==> Installing dependencies with npm...
==> Using Node.js version 24.14.1 (default)
==> Docs on specifying a Node.js version: https://render.com/docs/node-version
added 1321 packages, and audited 1322 packages in 29s
268 packages are looking for funding
  run npm fund for details
29 vulnerabilities (9 low, 3 moderate, 17 high)
To address issues that do not require attention, run:
  npm audit fix
To address all issues (including breaking changes), run:
  npm audit fix --force
Run npm audit for details.
up to date, audited 1322 packages in 5s
268 packages are looking for funding
  run npm fund for details
29 vulnerabilities (9 low, 3 moderate, 17 high)
To address issues that do not require attention, run:
  npm audit fix
To address all issues (including breaking changes), run:
  npm audit fix --force
Run npm audit for details.
==> Running build command 'npm install && npm run build'...
up to date, audited 1322 packages in 5s
268 packages are looking for funding
  run npm fund for details
29 vulnerabilities (9 low, 3 moderate, 17 high)
To address issues that do not require attention, run:
  npm audit fix
To address all issues (including breaking changes), run:
  npm audit fix --force
Run npm audit for details.
> frontend@0.1.0 build
> react-scripts build
(node:287) [DEP0176] DeprecationWarning: fs.F_OK is deprecated, use fs.constants.F_OK instead
(Use node --trace-deprecation ... to show where the warning was created)
Creating an optimized production build...
Compiled successfully.
File sizes after gzip:
  100.84 kB  build/static/js/main.5d4a4d63.js
  3.97 kB    build/static/css/main.a7cc3b54.css
  1.76 kB    build/static/js/453.825386d9.chunk.js
The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.
The build folder is ready to be deployed.
You may serve it with a static server:
  npm install -g serve
  serve -s build
Find out more about deployment here:
  https://cra.link/deployment
==> Uploading build...
==> Your site is live 🎉

Super 🎉 Frontend deploy success అయింది.

Your site is live 🎉 ante website live lo undi.

Ippudu next:

1. Frontend URL open cheyyi
Render static site dashboard lo URL untundi
(Example: https://lavish-bites-frontend.onrender.com)

Open చేసి check cheyyi:

Home page వస్తుందా?

UI correct ga undా?

2. Signup / Login test cheyyi
Click signup/login చేసి test user create cheyyi.

3. If login/signup work avvakapothe
Problem almost surely API URL issue.

Frontend code lo localhost undemo check cheyyi:

Search:

http://localhost:5000
If dorikithe replace with your backend:

https://lavish-bites-backend.onrender.com
Then:

git add .
git commit -m "updated backend api"
git push
Render auto redeploy chestundi.

4. Backend Mongo auth error fix cheyyali
Earlier logs lo idi undi:

MongoServerError: bad auth
Ante backend DB connect avvatledu.

Render backend service → Environment Variables

Check MONGO_URI

Correct ga undali like:

mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/lavishbites?retryWrites=true&w=majority
Password lo @ unte %40 use cheyyi.

Ippudu website open చేసి em vastundo cheppu:

Home page వస్తుందా?

Blank page aa?

Login fail aa?

Error message aa?


naku url kanipinchatledhu

Sare 👍 URL ekkada untundo cheptha.

Open Render Dashboard

Left side lo mee new static site untundi:

lavish-bites-frontend (or similar name)

Dani meedha click cheyyi.

Top lo ila kanipisthundi:

https://something.onrender.com
Adhe mee frontend URL ✅

Usually:

Top right
OR

Service name kinda

untundi.

Aa URL open cheyyi.

If still kanipinchatledhu:

screenshot pampu

Render page screenshot

Appudu exact ekkada click cheyalo chupistha.


lavish-bites-frontend kanipinchaledhu

Meeru frontend deploy create cheyyaledhu anukunta. Build success logs vachayi kani service list lo check cheyyali.

Ila cheyyi step by step:

Open Render Dashboard

Left side lo:

Web Services

Static Sites

ani sections untayi.

Static Sites open cheyyi.

Akkada lavish-bites-frontend lekapothe:

malli create cheyyali 👇

Frontend Create Again
STEP 1
Click:

New +
STEP 2
Select:

Static Site
STEP 3
GitHub repo select:

Lavish-Bites
STEP 4
Settings enter cheyyi:

Name: lavish-bites-frontend
Root Directory: frontend
Build Command: npm install && npm run build
Publish Directory: build
STEP 5
Click:

Create Static Site
Deploy complete ayyaka definitely URL vastundi:

https://lavish-bites-frontend.onrender.com
Deploy ayyaka screenshot pampithe next backend connect cheptha.


oyy nenu eppudu naa project ki oka website link cfeate cheyagalana

Avunu 😄 ippude create cheyagalavu. Mee project already deploy stage varaku vachindi.

Mee project ki rendu links untayi:

Backend link
Example:
Lavish Bites Backend

Frontend website link (idi users open chestharu)

Ippudu frontend deploy complete chesthe final website link vastundi like:

https://lavish-bites-frontend.onrender.com
Aa link ni:

friends ki share cheyyochu

resume lo pettochu

portfolio lo use cheyyochu

Ippudu direct ga frontend create cheyyi:

Render Dashboard

New +

Static Site

Repo select → Lavish-Bites

Settings:

Root Directory: frontend
Build Command: npm install && npm run build
Publish Directory: build
Create Static Site

2–5 mins lo website link generate avuthundi 🎉


aa backend link kuda ravatledhu

Backend link already deploy logs lo vachindi:

Lavish Bites Backend

Open chesthe:

Cannot GET /
vasthe normal 😄
Endukante backend API only run avuthundhi.

Ippudu backend live undho ledo test cheyyali.

Mee server.js lo temporary ga idi add cheyyi:

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});
Mostly app.listen() mundhu add cheyyi.

Example:

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
Tarvata:

git add .
git commit -m "added root route"
git push
Render auto redeploy chestundi.

Deploy ayyaka backend URL open chesthe:

Backend Running Successfully
ani vastundi ✅

Kani important:
MongoDB auth error inka undhi.

Kabatti .env lo MONGO_URI correct cheyyali.

Otherwise:

signup

login

database

work avvavu.


eppudu ivi anni endhulo cheyali

Ivi anni mee local project folder lo cheyyali 😄

VS Code lo open chesi cheyyi.

Step-by-step
1. VS Code open cheyyi
Mee Lavish-Bites project open cheyyi.

2. Backend folder open cheyyi
Mostly structure ila untundi:

Lavish-Bites
 ├── backend
 └── frontend
backend folder open cheyyi.

3. server.js file open cheyyi
Akkada:

app.listen(...)
kanipisthundi.

4. app.listen paina idi paste cheyyi
app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});
Example:

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
5. Save cheyyi
Shortcut:

Ctrl + S
6. VS Code terminal open cheyyi
Ctrl + `
7. Commands run cheyyi
git add .
git commit -m "added backend route"
git push
8. Render automatic ga redeploy chestundi
2 mins wait cheyyi.

Then open:

Lavish Bites Backend

Ippudu:

Backend Running Successfully
ani ravali ✅


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/lavishbites', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/orders', require('./routes/orders'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(Server running on port ${PORT}));

Mee code correct gane undhi 👍
Ippudu app.listen mundhu idi add cheyyi:

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});
Final code ila undali:

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/lavishbites', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/orders', require('./routes/orders'));

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
Tarvata terminal lo run cheyyi:

git add .
git commit -m "added root route"
git push
Then Render automatic ga redeploy chestundi ✅


>> npm install
>> npm start

up to date, audited 1322 packages in 6s

268 packages are looking for funding
  run npm fund for details
? Something is already running on
√ Something is already running on port 3000.

Would you like to run the app on another port instead? ... yes
(node:14340) [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
(node:14340
Compiled successfully!

You can now view frontend in the browser.

  Local:            http://localhost:3001
  On Your Network:  http://192.168.31.233:3001

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully

 *  History restored 

PS C:\Users\user\OneDrive\Desktop\Lavish Bites> 
 *  History restored 

PS C:\Users\user\OneDrive\Desktop\Lavish Bites> 
 *  History restored 

PS C:\Users\user\OneDrive\Desktop\Lavish Bites> git add .
warning: in the working copy of 'frontend/package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package-lock.json', LF will be replaced by CRLF the next time Git touches it
PS C:\Users\user\OneDrive\Desktop\Lavish Bites> 

Super 👍 anni correct ga run అయ్యాయి.

Ippudu next commands run cheyyi:

git commit -m "added backend route"
Tarvata:

git push
Push complete ayyaka:

Render automatic ga redeploy chestundi

1–2 mins wait cheyyi

Then backend open cheyyi:

Lavish Bites Backend

Ippudu:

Backend Running Successfully
ani ravali ✅


pressing objectsCompressing objectsCompressing objects: 100% (7/7), done.
Writing objects:  1Writing objects:  2Writing objects:  4Writing objects:  5Writing objects:  7Writing objects:  8Writing objects: 10Writing objects: 100% (7/7), 782 bytes | 782.00 KiB/s, done.
Total 7 (delta 4), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving dremote: Resolving dremote: Resolving dremote: Resolving dremote: Resolving dremote: Resolving deltas: 100% (4/4), completed with 4 local objects.
To https://github.com/hemanjali1805/Lavish-Bites.git
   bce955e..966c283  main -> main
PS C:\Users\user\OneDrive\Desktop\Lavish Bites> 

Perfect 🎉 GitHub ki push successful ayindi.

Ippudu Render automatic ga redeploy chestundi.

Next step:

Open Render Dashboard

Mee backend service open cheyyi:

lavish-bites-1

Logs lo check cheyyi:

Deploy live

Server running on port 10000

Tarvata open cheyyi:

Lavish Bites Backend

Ippudu:

Backend Running Successfully
ani ravali ✅

If inka MongoDB error vasthe:

Render → Environment

MONGO_URI screenshot (password hide chesi)

or error logs pampu

Appudu DB fix chestham.


backend service ela open cheyali

Ila open cheyyi 😄

Open Render Dashboard

Left side lo:

Web Services
ani untundi.

Dantlo:

lavish-bites-1
(mee backend service name)

danimeedha click cheyyi ✅

Open ayyaka:

Top lo URL untundi

Middle lo Logs untayi

Environment tab untundi

Backend service ante ade lavish-bites-1.

Akkada click chesthe backend dashboard open avuthundi.


dda3bd9e-aa79-4f1d-9018-8fa7f6bc46ec.png

Meeru correct page lo unnaru 👍
Kani idi new service create page.

Existing backend service open cheyyadaniki:

Left top lo unna:

☰  (3 lines menu)
click cheyyi.

Appudu sidebar open avuthundi.

Akkada:

Lavish-Bites-1
ani service untundi.

Danimeedha click cheyyi ✅

Akkada:

Logs

Environment

URL

anni kanipisthai.

Then top lo URL open cheyyi.


efffdec9-b4e2-4346-937e-154df681cfb4.png

Super 👍

Ippudu:

Projects already select ayindi.

Left menu close cheyyi (X click).

Main page lo kinda scroll cheyyi.

Akkada mee services cards laga kanipisthai:

Lavish-Bites-1

frontend service unte adi kuda

Lavish-Bites-1 meedha click cheyyi.

Then backend dashboard open avuthundi ✅

Akkada:

Logs

Events

Environment

URL

anni kanipisthai.


44284f3d-8a83-470d-9763-654d30e8485a.png

Perfect 🎉 Backend service open అయింది.

Ippudu direct ga ee link open cheyyi:

Lavish Bites Backend Live URL

Ippudu:

Backend Running Successfully
ani vasthe backend correct ga work avuthundi ✅

If inka MongoDB error vasthe:

Same page lo kinda scroll cheyyi

Logs section open cheyyi

Latest error screenshot pampu

Mostly remaining issue:

MONGO_URI wrong
adhi fix chesthe full website work avuthundi 🚀


Backend Running Successfully ani vachindhi

Super 🎉🔥
Mee backend successful ga live ayindi.

Ippudu next remaining task:

Frontend ni backend ki connect cheyyali
Mee frontend lo localhost API unte replace cheyyali.

STEP 1 — VS Code lo search cheyyi
Search:

localhost:5000
Usually files like:

axios.js

Login.js

Signup.js

Cart.js

lo untundi.

STEP 2 — Replace with backend URL
Replace this:

http://localhost:5000
with:

https://lavish-bites-backend.onrender.com
STEP 3 — Save all files
Ctrl + S
STEP 4 — Push changes
Terminal lo:

git add .
git commit -m "connected frontend to backend"
git push
STEP 5 — Frontend deploy/create
Ippudu frontend website create cheyyali:

Render Dashboard

New +

Static Site

Repo select → Lavish-Bites

Settings:

Root Directory: frontend
Build Command: npm install && npm run build
Publish Directory: build
Create Static Site

Deploy ayyaka final website URL vastundi 🎉


naku step to step explain chey

Sare 😄 very simple ga step-by-step cheptha.

FRONTEND CONNECT + WEBSITE CREATE
STEP 1 — VS Code Open
Mee Lavish Bites project open cheyyi.

STEP 2 — Search localhost
Keyboard lo:

Ctrl + Shift + F
press cheyyi.

Search box lo type cheyyi:

localhost:5000
STEP 3 — Replace URL
Ekkada kanipisthe akkada:

http://localhost:5000
ni delete chesi

idi paste cheyyi:

https://lavish-bites-backend.onrender.com
STEP 4 — Save Files
Keyboard:

Ctrl + S
STEP 5 — Push to GitHub
VS Code terminal open cheyyi:

Ctrl + `
Commands run cheyyi:

git add .
git commit -m "connected frontend backend"
git push
STEP 6 — Create Website
Open:

Render Dashboard

STEP 7
Top left:

New +
click cheyyi.

STEP 8
Select:

Static Site
STEP 9
Repo select cheyyi:

Lavish-Bites
STEP 10 — Settings Enter
Exact ga ivvi enter cheyyi:

Name: lavish-bites-frontend
Root Directory: frontend
Build Command: npm install && npm run build
Publish Directory: build
STEP 11
Click:

Create Static Site
STEP 12
2–5 mins wait cheyyi.

Tarvata Render meeku oka website URL istundi like:

https://lavish-bites-frontend.onrender.com
Adhe mee final website 🎉


6da70e9d-18ea-40af-a59e-da4bc508e84e.png

Perfect 😄
Ippudu next simple step.

Search results lo kanipisthunna files open cheyyi.

Example:

AuthContext...

CartContext...

Cart.js

Akkada:

http://localhost:5000
untundi.

Replace Cheyyi
Danni delete chesi:

https://lavish-bites-backend.onrender.com
paste cheyyi.

Example
Before:

axios.post("http://localhost:5000/api/auth/login")
After:

axios.post("https://lavish-bites-backend.onrender.com/api/auth/login")
IMPORTANT
Search results lo unna anni localhost:5000 replace cheyyi ✅

Tarvata
Keyboard:

Ctrl + S
Terminal lo commands run cheyyi
git add .
git commit -m "updated api urls"
git push
Push ayyaka cheppu 😄


naku correct ga ekkada ekkada marchalo detail ga chepu

Sare 😄 image batti exact ga cheptha.

Mee left side search results lo localhost:5000 5 files lo undhi.

Mee task:
http://localhost:5000 ni
https://lavish-bites-backend.onrender.com

FILE 1 — AuthContext...
Left side:

AuthContext...
danimeedha click cheyyi.

Akkada ila untundi:

axios.post('http://localhost:5000/...')
Danni ila marchi:

axios.post('https://lavish-bites-backend.onrender.com/...')
Akkada 2 places unnayi → rendu replace cheyyi.

FILE 2 — CartContext.js
Click:

CartContext.js
Akkada 4 places unnayi.

Example:

axios.get('http://localhost:5000/...')
Replace with:

axios.get('https://lavish-bites-backend.onrender.com/...')
ALL 4 replace cheyyi.

FILE 3 — Cart.js
Click:

Cart.js
Akkada:

fetch('http://localhost:5000/...')
Replace with:

fetch('https://lavish-bites-backend.onrender.com/...')
FILE 4 — CategoryPage...
Click:

CategoryPage...
Akkada:

axios.get('http://localhost:5000/...')
Replace with:

axios.get('https://lavish-bites-backend.onrender.com/...')
FINAL STEP
All files save cheyyi:

Ctrl + S
THEN TERMINAL LO
Run:

git add .
git commit -m "updated backend urls"
git push
Push ayyaka cheppu 😄


axios.post('http://localhost:5000/api/auth/login'

Idi ila replace cheyyi ✅

Before:

axios.post('http://localhost:5000/api/auth/login'
After:

axios.post('https://lavish-bites-backend.onrender.com/api/auth/login')
Alage migatha localhost links anni same way lo replace cheyyi 😄


# Lavish Bites

A modern, elegant food ordering web application with a pastel lavender theme.

## Features

- Splash screen with smooth animations
- User authentication (login/signup)
- Home page with food categories
- Category pages with product listings
- Shopping cart functionality
- Order placement with payment options
- Responsive design
- Toast notifications

## Tech Stack

- **Frontend:** React.js, React Router, Axios, React Toastify
- **Backend:** Node.js, Express.js, MongoDB, JWT
- **Styling:** CSS with pastel lavender theme

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or cloud instance)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   
cd backend


2. Install dependencies:
   
npm install


3. Set up environment variables:
   Create a .env file in the backend directory with:
   
MONGO_URI=mongodb://localhost:27017/lavishbites
   JWT_SECRET=your_jwt_secret_here


4. Seed the database with sample products:
   
npm run seed


5. Start the backend server:
   
npm run dev

   The server will run on http://lavish-bites-backend.onrender.com

### Frontend Setup

1. Navigate to the frontend directory:
   
cd frontend


2. Install dependencies:
   
npm install


3. Start the development server:
   
npm start

   The app will open in your browser at http://localhost:3000

## Usage

1. The app starts with a splash screen.
2. If not logged in, you'll see the login/signup page.
3. After logging in, browse categories on the home page.
4. Click on a category to view products.
5. Add items to cart and proceed to checkout.
6. Place orders with delivery details.

## API Endpoints

- POST /api/auth/register - User registration
- POST /api/auth/login - User login
- GET /api/products - Get all products
- GET /api/products/:category - Get products by category
- GET /api/cart - Get user cart
- POST /api/cart/add - Add item to cart
- PUT /api/cart/update - Update cart item quantity
- DELETE /api/cart/remove/:productId - Remove item from cart
- POST /api/orders - Place order
- GET /api/orders - Get user orders

## Database Schema

### Users
- name, email, password, phone

### Products
- name, category, type (veg/non-veg), price, image

### Orders
- userId, items, totalPrice, address, paymentMethod, status

### Cart
- userId, items (with productId and quantity)

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## License

This project is licensed under the MIT License.

Idi README file 😄
Ikkada change cheyyalsina avasaram ledu.

Meeru code files lo maatrame replace cheyyali.

Search results lo unna:

AuthContext...

CartContext.js

Cart.js

CategoryPage...

files lo change cheyyi.

Example:

If you see:

axios.post('http://localhost:5000/api/auth/login')
replace with:

axios.post('https://lavish-bites-backend.onrender.com/api/auth/login')
README file ni close chesi next search result file open cheyyi 😄


nenu pettina dantlo emaina marchala

Avunu 😄 README lo okka small change cheyyi.

Ikkada:

The server will run on http://lavish-bites-backend.onrender.com
idi wrong.

Replace with:

The server will run on 

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```
   The app will open in your browser at http://localhost:3000

## Usage

1. The app starts with a splash screen.
2. If not logged in, you'll see the login/signup page.
3. After logging in, browse categories on the home page.
4. Click on a category to view products.
5. Add items to cart and proceed to checkout.
6. Place orders with delivery details.

## API Endpoints

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/products` - Get all products
- `GET /api/products/:category` - Get products by category
- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update cart item quantity
- `DELETE /api/cart/remove/:productId` - Remove item from cart
- `POST /api/orders` - Place order
- `GET /api/orders` - Get user orders

## Database Schema

### Users
- name, email, password, phone

### Products
- name, category, type (veg/non-veg), price, image

### Orders
- userId, items, totalPrice, address, paymentMethod, status

### Cart
- userId, items (with productId and quantity)

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## License

This project is licensed under the MIT License.