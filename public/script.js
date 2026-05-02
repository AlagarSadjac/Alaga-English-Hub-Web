
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

//------------------------------------------------------------------------------------------------------------------------


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

//-----------------------------------------------------------------------------------------------------------------------
// லாகின் செய்யும் பங்க்ஷன்
function performLogin() {
    const userEmail = document.getElementById('email').value;
    const userPass = document.getElementById('password').value;

    fetch('https://alaga-english-hub-web-api.onrender.com/api/student/login', {
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



//========================================================================================================================================
function showTenses() {
    const area = document.getElementById('vocab-info');
    
    // மற்ற இரண்டையும் (Tenses & Quiz) மறைக்கிறோம்
    document.getElementById('tenses-card').style.display = 'none';
    document.getElementById('quiz-card').style.display = 'none';

    // Vocabulary கார்டை மட்டும் முழு அகலத்திற்கு மாற்றுகிறோம்
    const vocabCard = document.getElementById('vocab-card');
    vocabCard.style.width = '100%';
    
    
    area.innerHTML = `
<div style="background: #f9f9f9; padding: 15px; border-radius: 10px; margin-top: 10px; font-family: Arial, sans-serif;">
    
    <h3 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 5px;">Present Tense</h3>
    <p><b>Present Simple:</b> I speak. - நான் பேசுகிறேன்.</p>
    <p><b>Present Continuous:</b> I am speaking. - நான் பேசிக்கொண்டு இருக்கிறேன்.</p>
    <p><b>Present Perfect:</b> I have spoken. - நான் பேசி இருக்கிறேன்.</p>
    <p><b>Present Perfect Continuous:</b> I have been speaking. - நான் பேசிக்கொண்டே இருக்கிறேன்.</p>
    
    <h3 style="color: #2c3e50; border-bottom: 2px solid #e67e22; padding-bottom: 5px; margin-top: 20px;">Past Tense</h3>
    <p><b>Past Simple:</b> I spoke. - நான் பேசினேன்.</p>
    <p><b>Past Continuous:</b> I was speaking. - நான் பேசிக்கொண்டு இருந்தேன்.</p>
    <p><b>Past Perfect:</b> I had spoken. - நான் பேசி இருந்தேன்.</p>
    <p><b>Past Perfect Continuous:</b> I had been speaking. - நான் பேசிக்கொண்டே இருந்தேன்.</p>
    
    <h3 style="color: #2c3e50; border-bottom: 2px solid #27ae60; padding-bottom: 5px; margin-top: 20px;">Future Tense</h3>
    <p><b>Future Simple:</b> I will speak. - நான் பேசுவேன்.</p>
    <p><b>Future Continuous:</b> I will be speaking. - நான் பேசிக்கொண்டு இருப்பேன்.</p>
    <p><b>Future Perfect:</b> I will have spoken. - நான் பேசி இருப்பேன்.</p>
    <p><b>Future Perfect Continuous:</b> I will have been speaking. - நான் பேசிக்கொண்டே இருப்பேன்.</p>

    <button class="btn" style="width: auto; padding: 8px 20px; margin-top: 20px; cursor: pointer;" onclick="
            document.getElementById('tenses-card').style.display = 'block';
            document.getElementById('quiz-card').style.display = 'block';
            document.getElementById('vocab-card').style.width = 'auto';
            document.getElementById('vocab-info').style.display = 'none';
        ">
        Close (திரும்பச் செல்)
        </button>
</div>
`;
    
    area.style.display = 'block';
}

//-------------------------------------------------------------------------------------------------------------------------------------
function showVocab() {
    const area = document.getElementById('vocab-info');
    
    // மற்ற இரண்டையும் (Tenses & Quiz) மறைக்கிறோம்
    document.getElementById('tenses-card').style.display = 'none';
    document.getElementById('quiz-card').style.display = 'none';

    // Vocabulary கார்டை மட்டும் முழு அகலத்திற்கு மாற்றுகிறோம்
    const vocabCard = document.getElementById('vocab-card');
    vocabCard.style.width = '100%';
    
    
    area.innerHTML = `
<div style="background: #f0f4ff; padding: 15px; border-radius: 10px; margin-top: 10px; font-family: Arial, sans-serif; ">
    
    <p style="color: #4a148c; font-weight: bold; font-size: 18px; border-bottom: 2px solid #4a148c; padding-bottom: 5px;">Daily Vocabulary (வார்த்தைகள்):</p>
    
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Always:</b> எப்போதும்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Believe:</b> நம்பு</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Beautiful:</b> அழகான</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Begin:</b> தொடங்கு</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Breakfast:</b> காலை உணவு</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Carefully:</b> கவனமாக</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Change:</b> மாற்றம்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Clean:</b> சுத்தம்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Difficult:</b> கடினமான</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Dream:</b> கனவு</p>
    
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Education:</b> கல்வி</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Everything:</b> எல்லாம்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Example:</b> உதாரணம்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Family:</b> குடும்பம்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Finish:</b> முடி</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Forget:</b> மறந்துவிடு</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Future:</b> எதிர்காலம்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Garden:</b> தோட்டம்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Happiness:</b> மகிழ்ச்சி</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Healthy:</b> ஆரோக்கியமான</p>

    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Important:</b> முக்கியமான</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Journey:</b> பயணம்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Knowledge:</b> அறிவு</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Learn:</b> கற்றுக்கொள்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Listen:</b> கவனி / கேள்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Market:</b> சந்தை</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Morning:</b> காலை</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Necessary:</b> அவசியமான</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Opportunity:</b> வாய்ப்பு</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>People:</b> மக்கள்</p>

    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Question:</b> கேள்வி</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Ready:</b> தயார்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Remember:</b> நினைவில் கொள்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Respect:</b> மரியாதை</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Simple:</b> எளிமையான</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Smile:</b> புன்னகை</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Success:</b> வெற்றி</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Today:</b> இன்று</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Tomorrow:</b> நாளை</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Understand:</b> புரிந்துகொள்</p>

    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Village:</b> கிராமம்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Waiting:</b> காத்திருத்தல்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Window:</b> ஜன்னல்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>World:</b> உலகம்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Yesterday:</b> நேற்று</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Young:</b> இளமையான</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Advice:</b> அறிவுரை</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Answer:</b> பதில்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Collect:</b> சேகரி</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Different:</b> வித்தியாசமான</p>

    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Accept:</b> ஏற்றுக்கொள்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Address:</b> முகவரி</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Afraid:</b> பயம்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Amazing:</b> ஆச்சரியமான</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Anger:</b> கோபம்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Arrival:</b> வருகை</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Believe:</b> நம்பு</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Borrow:</b> கடன் வாங்கு</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Bridge:</b> பாலம்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Business:</b> வணிகம்</p>

    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Celebrate:</b> கொண்டாடு</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Century:</b> நூற்றாண்டு</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Challenge:</b> சவால்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Comfort:</b> ஆறுதல் / வசதி</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Compare:</b> ஒப்பிடு</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Condition:</b> நிலைமை / நிபந்தனை</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Confidence:</b> தன்னம்பிக்கை</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Continue:</b> தொடரு</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Control:</b> கட்டுப்பாடு</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Create:</b> உருவாக்கு</p>

    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Decision:</b> முடிவு</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Degree:</b> பட்டம் / அளவு</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Deliver:</b> வழங்கு / ஒப்படை</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Distance:</b> தூரம்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Effort:</b> முயற்சி</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Energy:</b> ஆற்றல்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Escape:</b> தப்பித்தல்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Evidence:</b> ஆதாரம்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Expect:</b> எதிர்பார்ப்பது</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Experience:</b> அனுபவம்</p>

    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Failure:</b> தோல்வி</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Famous:</b> புகழ்பெற்ற</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Freedom:</b> சுதந்திரம்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Genuine:</b> உண்மையான</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Goal:</b> குறிக்கோள் / இலக்கு</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Habit:</b> பழக்கம்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>History:</b> வரலாறு</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Innocent:</b> அப்பாவி</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Island:</b> தீவு</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Justice:</b> நீதி</p>

    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Language:</b> மொழி</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Limit:</b> எல்லை / வரம்பு</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Nature:</b> இயற்கை</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Option:</b> விருப்பம் / தேர்வு</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Perfect:</b> சரியானது</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Quality:</b> தரம்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Reason:</b> காரணம்</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Silence:</b> அமைதி</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Target:</b> இலக்கு</p>
    <p><span style="color: #e67e22; margin-right: 10px;">■</span><b>Wisdom:</b> ஞானம்</p>

    <button class="btn" style="width: auto; padding: 8px 20px; margin-top: 20px; background: #6c757d; color: white; border: none; border-radius: 5px; cursor: pointer;" onclick="
            document.getElementById('tenses-card').style.display = 'block';
            document.getElementById('quiz-card').style.display = 'block';
            document.getElementById('vocab-card').style.width = 'auto';
            document.getElementById('vocab-info').style.display = 'none';
        ">
        Close (திரும்பச் செல்)
        </button>
</div>
`;
    
    area.style.display = 'block';
}

//------------------------------------------------------------------------------------------------------------------------------------

function showQuiz() {
    const area = document.getElementById('vocab-info');
    
    // மற்ற இரண்டையும் (Tenses & Quiz) மறைக்கிறோம்
    document.getElementById('tenses-card').style.display = 'none';
    document.getElementById('quiz-card').style.display = 'none';

    // Vocabulary கார்டை மட்டும் முழு அகலத்திற்கு மாற்றுகிறோம்
    const vocabCard = document.getElementById('vocab-card');
    vocabCard.style.width = '100%';
    
    // பட்டன்கள் கொண்ட முழுமையான 100 கேள்விகள்
    area.innerHTML = `
    <div style="background: #fff0f5; padding: 15px; border-radius: 10px; margin-top: 10px;  font-family: Arial, sans-serif; border: 1px solid #ff4081;">
        <p style="color: #ff4081; font-weight: bold; font-size: 18px; border-bottom: 2px solid #ff4081; padding-bottom: 5px;">Quick Quiz - 100 Questions (கிளிக் செய்து விடையளிக்கவும்):</p>
        
        <div style="margin-bottom: 15px;">
            <p><b>1. She ____ a doctor.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">is</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">are</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>2. I ____ to Chennai yesterday.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">went</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">go</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>3. They ____ playing now.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">is</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">are</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>4. Birds ____ in the sky.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">fly</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">flies</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>5. He ____ a mango.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">eat</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">eats</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>6. We ____ students.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">are</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">am</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>7. It ____ raining now.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">is</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">was</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>8. Sun ____ in the east.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">rise</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">rises</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>9. I ____ a letter tomorrow.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">will write</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">wrote</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>10. You ____ very kind.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">are</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">is</button>
        </div>
        <hr style="border: 1px solid #ff4081;">

        <div style="margin-bottom: 15px;">
            <p><b>11. My father ____ in a bank.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">works</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">work</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>12. Dogs ____ at strangers.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">barks</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">bark</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>13. She ____ her homework yet.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">finish</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">has not finished</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>14. I ____ coffee every morning.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">drink</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">drinks</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>15. They ____ to the park daily.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">goes</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">go</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>16. Ram ____ a good boy.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">is</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">are</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>17. The cat ____ milk.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">likes</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">like</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>18. We ____ a movie last night.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">watch</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">watched</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>19. It ____ cold today.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">is</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">are</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>20. I ____ my key.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">lost</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">lose</button>
        </div>
        <hr style="border: 1px solid #ff4081;">

        <div style="margin-bottom: 15px;">
            <p><b>21. Water ____ at 100°C.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">boils</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">boil</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>22. She ____ a song now.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">is singing</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">sang</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>23. I ____ Tamil well.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">speaks</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">speak</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>24. The train ____ already.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">has left</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">leave</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>25. We ____ football on Sundays.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">play</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">plays</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>26. He ____ a bike.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">have</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">has</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>27. They ____ happy.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">are</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">is</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>28. I ____ hungry.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">am</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">is</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>29. Look! The baby ____.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">is sleeping</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">sleep</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>30. Earth ____ round the sun.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">revolve</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">revolves</button>
        </div>
        <hr style="border: 1px solid #ff4081;">

        <div style="margin-bottom: 15px;">
            <p><b>31. I ____ him last week.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">met</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">meet</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>32. She ____ to school by bus.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">go</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">goes</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>33. They ____ English.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">learn</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">learns</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>34. It ____ a big house.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">is</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">are</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>35. We ____ for you.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">are waiting</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">wait</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>36. He ____ very fast.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">run</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">runs</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>37. I ____ a student in 2020.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">was</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">am</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>38. My mother ____ tasty food.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">cook</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">cooks</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>39. You ____ my best friend.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">are</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">is</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>40. The stars ____ at night.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">shines</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">shine</button>
        </div>
        <hr style="border: 1px solid #ff4081;">

        <div style="margin-bottom: 15px;">
            <p><b>41. I ____ an apple.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">want</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">wants</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>42. She ____ two brothers.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">has</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">have</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>43. They ____ in London.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">live</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">lives</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>44. We ____ the match.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">win</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">won</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>45. It ____ 10 oclock.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">is</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">are</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>46. He ____ for a job.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">search</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">is searching</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>47. Birds ____ nests.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">builds</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">build</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>48. I ____ my breakfast.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">had</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">has</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>49. Please ____ here.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">sit</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">sits</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>50. Do not ____ lie.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">tells</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">tell</button>
        </div>
        <hr style="border: 1px solid #ff4081;">

        <div style="margin-bottom: 15px;">
            <p><b>51. I ____ him tomorrow.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">will call</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">called</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>52. She ____ a teacher.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">are</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">is</button>
        </div>
        <div style="margin-bottom: 15px;">
        <p><b>53. They ____ coming today.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">are</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">is</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>54. We ____ the exam.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">pass</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">passed</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>55. It ____ expensive.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">is</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">am</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>56. He ____ a story.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">is writing</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">wrote</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>57. I ____ my room daily.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">clean</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">cleans</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>58. The bus ____ at 8 AM.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">arrive</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">arrives</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>59. You ____ late.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">are</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">is</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>60. Trees ____ us oxygen.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">give</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">gives</button>
        </div>
        <hr style="border: 1px solid #ff4081;">

        <div style="margin-bottom: 15px;">
            <p><b>61. I ____ tea, not coffee.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">likes</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">like</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>62. She ____ a car.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">drive</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">drives</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>63. They ____ help us.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">will</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">was</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>64. We ____ at 6 AM.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">wake up</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">wakes up</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>65. It ____ very hot today.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">are</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">is</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>66. He ____ a blue shirt.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">wears</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">is wearing</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>67. I ____ this movie before.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">see</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">have seen</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>68. Time ____ fast.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">fly</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">flies</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>69. You ____ smart.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">are</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">is</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>70. Cows ____ milk.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">gives</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">give</button>
        </div>
        <hr style="border: 1px solid #ff4081;">

        <div style="margin-bottom: 15px;">
            <p><b>71. I ____ my work.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">finished</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">finish</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>72. She ____ well.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">dances</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">dance</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>73. They ____ brothers.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">is</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">are</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>74. We ____ together.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">works</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">work</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>75. It ____ a gift.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">is</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">am</button>
        </div>
        <div style="margin-bottom: 15px;">

        <p><b>76. He ____ cricket.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">play</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">plays</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>77. I ____ to the gym.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">go</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">goes</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>78. The baby ____.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">cry</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">is crying</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>79. You ____ beautiful.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">looks</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">look</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>80. Rain ____ from clouds.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">fall</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">falls</button>
        </div>
        <hr style="border: 1px solid #ff4081;">

        <div style="margin-bottom: 15px;">
            <p><b>81. I ____ a new phone.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">buy</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">bought</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>82. She ____ the answer.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">know</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">knows</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>83. They ____ very busy.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">are</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">is</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>84. We ____ our country.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">love</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">loves</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>85. It ____ my pen.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">is</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">are</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>86. He ____ the door.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">close</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">closed</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>87. I ____ the truth.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">tell</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">told</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>88. Fire ____ hot.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">am</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">is</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>89. You ____ music.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">likes</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">like</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>90. Flowers ____ in spring.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">bloom</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">blooms</button>
        </div>
        <hr style="border: 1px solid #ff4081;">

        <div style="margin-bottom: 15px;">
            <p><b>91. I ____ a question.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">has</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">have</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>92. She ____ a umbrella.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">have</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">has</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>93. They ____ my friends.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">is</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">are</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>94. We ____ to help.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">need</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">needs</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>95. It ____ easy.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">is</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">am</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>96. He ____ a letter.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">write</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">wrote</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>97. I ____ swim.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">is</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">can</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>98. The clock ____.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">ticks</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">tick</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>99. You ____ go now.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">are</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">can</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p><b>100. Life ____ beautiful.</b></p>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Correct! 😊')">is</button>
            <button class="btn" style="width: auto; padding: 5px 10px; margin: 2px;" onclick="alert('Wrong! 😞')">are</button>
        </div>

        <button class="btn" style="width: auto; padding: 8px 20px; margin-top: 20px; background: #6c757d; color: white; border: none; border-radius: 5px; cursor: pointer;" onclick="
            document.getElementById('tenses-card').style.display = 'block';
            document.getElementById('quiz-card').style.display = 'block';
            document.getElementById('vocab-card').style.width = 'auto';
            document.getElementById('vocab-info').style.display = 'none';
        ">
        Close (திரும்பச் செல்)
        </button>
    </div>
    `;
    area.style.display = 'block';
}




