function showTenses() {
    const area = document.getElementById('tenses-info');
    area.innerHTML = `
        <div style="background: #f9f9f9; padding: 10px; border-radius: 10px; margin-top: 10px;">
            <p>✅ <b>Present Simple:</b> I speak.</p>
            <p>✅ <b>Present Continuous:</b> I am speaking.</p>
            <p>✅ <b>Present Perfect:</b> I have spoken.</p>
            <p>✅ <b>Past Simple:</b> I spoke.</p>
            <p>✅ <b>Past Continuous:</b> I was speaking.</p>
            <p>✅ <b>Future Simple:</b> I will speak.</p>
            <p style="color: blue; font-size: 12px;">...இன்னும் பல உள்ளன!</p>
            <button class="btn" style="width: auto; padding: 5px 15px;" onclick="document.getElementById('tenses-info').style.display='none'">Close</button>
        </div>
    `;
    area.style.display = 'block';
}


function showVocab() {
    const area = document.getElementById('vocab-info');
    area.innerHTML = `
        <div style="background: #f0f4ff; padding: 15px; border-radius: 10px; margin-top: 10px;">
            <p style="color: #4a148c; font-weight: bold;">Daily Vocabulary (வார்த்தைகள்):</p>
            <p>📙 <b>Aspire:</b> இலட்சியம் கொள்</p>
            <p>📙 <b>Fluent:</b> சரளமாகப் பேசுதல்</p>
            <p>📙 <b>Empower:</b> அதிகாரம் அளித்தல்</p>
            <p>📙 <b>Diligence:</b> விடாமுயற்சி</p>
            <p>📙 <b>Curiosity:</b> ஆர்வம் / தேடல்</p>
            <button class="btn" style="width: auto; padding: 5px 15px; background: #6c757d;" onclick="document.getElementById('vocab-info').style.display='none'">Close</button>
        </div>
    `;
    area.style.display = 'block';
}


function showQuiz() {
    const area = document.getElementById('quiz-info');
    area.innerHTML = `
        <div style="background: #fff0f5; padding: 15px; border-radius: 10px; margin-top: 10px;">
            <p style="color: #ff4081; font-weight: bold;">Quick Quiz (சிறிய தேர்வு):</p>
            
            <p><b>1. She ____ a doctor.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 5px;" onclick="alert('Correct! (is) என்பது சரி')">is</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 5px;" onclick="alert('Wrong! (are) என்பது தவறு')">are</button>
            
            <hr style="border: 0.5px solid #ddd; margin: 10px 0;">
            
            <p><b>2. I ____ to Chennai yesterday.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 5px;" onclick="alert('Correct! (went) என்பது சரி')">went</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 5px;" onclick="alert('Wrong! (go) என்பது தவறு')">go</button>
            
            <br>
            <button class="btn" style="width: auto; padding: 5px 15px; margin-top: 10px; background: #6c757d;" onclick="document.getElementById('quiz-info').style.display='none'">Close</button>
        </div>
    `;
    area.style.display = 'block';
}



function performLogin() {
    const userEmail = document.getElementById('email').value;
    const userPass = document.getElementById('password').value;


    fetch('https://alaga-english-hub-web-api.onrender.com/api/student/login', {  // ஸ்பிரிங் பூட் API-க்கு தகவலை அனுப்புதல்
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: userEmail,
            password: userPass
        })
    })
    .then(response => response.text()) // ஸ்பிரிங் பூட்டில் இருந்து வரும் பதிலை வாங்குதல்
    .then(data => {         

if (data === "success") {  // 1. தற்காலிக அறிவிப்பு
            const toast = document.createElement("div");
            toast.innerText = "வெற்றிகரமாக லாகின் செய்யப்பட்டது! உள்ளே நுழைகிறது...";
            toast.style = "position: fixed; top: 20px; right: 20px; background: #28a745; color: white; padding: 15px 25px; border-radius: 10px; z-index: 1000; box-shadow: 0 4px 15px rgba(0,0,0,0.2); font-weight: bold;";
            document.body.appendChild(toast);

            setTimeout(() => {  //  வினாடி கழித்து பக்கம் மாறுதல்
                toast.remove(); 
                document.getElementById('login-section').style.display = 'none';
                document.getElementById('main-container').style.display = 'block';
            }, 500); 
        } 
        else if (data === "wrong_password") {
            alert("தவறான பாஸ்வேர்ட்!");
        }

    if (loginBox && mainHub) {
        loginBox.style.setProperty('display', 'none', 'important');
        mainHub.style.setProperty('display', 'block', 'important');
    } else {
        alert("ID பெயர்களில் ஏதோ தவறு உள்ளது! தயவுசெய்து செக் செய்யவும்.");
    }

    })
    .catch(error => {
        console.error('Error:', error);
        alert("சர்வர் வேலை செய்யவில்லை! ஸ்பிரிங் பூட் ரன் ஆகிறதா என்று பார்க்கவும்.");
    });
}


// 'Sign Up' கிளிக் செய்யும் போது லாகின் பெட்டியை மறைத்து ரெஜிஸ்டர் பெட்டியைக் காட்ட
function showSignUp() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('signup-section').style.display = 'block';
}

// 'Login' கிளிக் செய்யும் போது ரெஜிஸ்டர் பெட்டியை மறைத்து லாகின் பெட்டியைக் காட்ட
function showLogin() {
    document.getElementById('signup-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
}

//----------------------------------------------


function performSignUp() {     //  புதிய மாணவர் பதிவு செய்யும் பங்க்ஷன் (Register)
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const pass = document.getElementById('reg-pass').value;

    if (!name || !email || !pass) {
        alert("அனைத்து விவரங்களையும் சரியாக நிரப்பவும்!");
        return;
    }

    fetch('https://alaga-english-hub-web-api.onrender.com/api/student/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, email: email, password: pass })
    })
    .then(response => {
        if (response.ok) {
            alert("வாழ்த்துகள் " + name + "! உங்கள் பதிவு வெற்றிகரமாக முடிந்தது. இப்போது லாகின் செய்யவும்.");
            showLogin(); // பதிவு முடிந்ததும் தானாக லாகின் பாக்ஸிற்குத் திரும்பும்
        } else {
            alert("பதிவு செய்வதில் தோல்வி. மீண்டும் முயற்சிக்கவும்.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("பதிவு செய்ய முடியவில்லை. சர்வர் ஓடுகிறதா எனப் பார்க்கவும்.");
    });
}

function showSignUp() {    //  பாக்ஸ்களை மாற்றி காட்டும் பங்க்ஷன்கள்
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('signup-section').style.display = 'block';
}

function showLogin() {
    document.getElementById('signup-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
}

//-------------------------------------------
// லாகின் செய்யும் பங்க்ஷன்
function performLogin() {
    const userEmail = document.getElementById('email').value;
    const userPass = document.getElementById('password').value;

    fetch('https://alaga-english-hub-web-api.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail, password: userPass })
    })
    .then(response => response.text())
    .then(data => {
        // இங்கே கவனியுங்கள்: பழைய alert வரி எதுவுமே இருக்கக்கூடாது!
        
        if (data === "success") {
            //  டோஸ்ட் அறிவிப்பு (Toast)
            const toast = document.createElement("div");
            toast.innerText = "வெற்றிகரமாக லாகின் செய்யப்பட்டது! உள்ளே நுழைகிறது...";
            toast.style = "position: fixed; top: 20px; right: 20px; background: #28a745; color: white; padding: 15px 25px; border-radius: 10px; z-index: 1000; box-shadow: 0 4px 15px rgba(0,0,0,0.2); font-weight: bold;";
            document.body.appendChild(toast);

            // வினாடி கழித்து பக்கம் மாறுதல்
            setTimeout(() => {
                toast.remove(); 
                document.getElementById('login-section').style.display = 'none';
                document.getElementById('main-container').style.display = 'block';
            }, 2000); 
        } 
        else if (data === "wrong_password") {
            alert("தவறான பாஸ்வேர்ட்!");
        }
        else {
            alert("பயனர் காணப்படவில்லை! தயவுசெய்து பதிவு செய்யவும்.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

