// app.js
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

const knowledgeBase = {
    // ... (Keep the previous keywords: "malware", "phishing", "ransomware", etc.)
    
    // ADDING 10 MORE COMPLEX QUESTIONS AS REQUESTED:
    "what is multi-factor authentication": "Multi-Factor Authentication (MFA) is a critical security protocol that requires users to provide two or more verification factors to gain access to a resource such as an application or online account. Rather than just asking for a username and password, MFA adds a layer of protection by requiring something the user knows (password), something the user has (a mobile app or security key), or something the user is (fingerprint/biometrics). Industry evidence from CISA and Microsoft proves that MFA can prevent over 99% of common account-based attacks. It is the single most effective recommendation for individual users.",
    "how do i report a cyber crime": "Reporting a cyber crime involves contacting the appropriate authorities to document the incident and prevent further victimization. In many regions, you should contact your local law enforcement agency's cyber division or national bodies like the FBI's IC3 (Internet Crime Complaint Center). Ensure you preserve all evidence, including emails, screenshots, and transaction logs, without altering them. Timely reporting is essential for tracking threat actors and potentially recovering stolen funds or data through legal channels.",
    "what is a firewall": "A firewall is a network security device that monitors incoming and outgoing network traffic and decides whether to allow or block specific traffic based on a defined set of security rules. Think of it as a digital gatekeeper that sits between your internal network and the chaotic public internet. Firewalls can be hardware-based, software-based, or both, and they are designed to prevent unauthorized access to your private data. While they are a fundamental defense, they are often insufficient against social engineering, which bypasses the firewall by tricking the user instead.",
    "what is encryption": "Encryption is the process of converting information or data into a code, especially to prevent unauthorized access. Using complex mathematical algorithms, encryption turns plain text into 'ciphertext' that can only be read if you have the correct decryption key. It is the primary method used to protect sensitive data while it is stored on a hard drive or being transmitted across the internet (like HTTPS). Without the key, the encrypted data appears as random, useless characters to any intercepting attacker, such as those performing Man-in-the-Middle attacks.",
    "what is zero trust": "Zero Trust is a modern cybersecurity framework based on the principle of 'never trust, always verify.' Unlike older security models that assumed everything inside a corporate network was safe, Zero Trust assumes that threats could exist both outside and inside the network at all times. It requires continuous verification of every user, device, and connection before granting access to sensitive data. This strategy is highly recommended by NIST to limit the lateral movement of hackers who have already breached the outer perimeter.",
    "what is a vpn": "A Virtual Private Network (VPN) creates a secure, encrypted tunnel between your device and a private server, effectively masking your IP address and protecting your data from local eavesdroppers. VPNs are highly recommended when using public Wi-Fi networks in places like cafes or airports to prevent Man-in-the-Middle attacks. By using a VPN, your internet traffic is encrypted before it even leaves your device, meaning anyone trying to intercept your data will see only indecipherable gibberish. However, it is vital to use a reputable, paid VPN service, as free services may log and sell your data.",
    "what is identity theft": "Identity theft occurs when a malicious actor steals your personal information—such as your social security number, full name, or credit card details—to commit fraud or other crimes in your name. This often follows a successful phishing or malware attack where the user's personal documents are exfiltrated. Victims can face years of financial and legal turmoil as they work to clear their names and restore their credit scores. Recommendations include using identity monitoring services and freezing your credit if you suspect your personal data has been leaked.",
    "what is patch management": "Patch management is the systematic process of identifying, testing, and installing software updates (patches) to fix vulnerabilities in an operating system or application. Most cyber attacks exploit 'known vulnerabilities'—bugs that the software manufacturer has already fixed, but the user hasn't updated yet. An effective patch management strategy involves enabling automatic updates whenever possible to close the window of opportunity for attackers. It is considered one of the most critical maintenance tasks for both individual users and professional ICT departments.",
    "what is a brute force attack": "A brute force attack is a trial-and-error method used by application programs to decode encrypted data such as passwords or Data Encryption Standard (DES) keys, through exhaustive effort rather than employing intellectual strategies. Attackers use automated software to guess millions of combinations every second until the correct one is found. This is why using long, complex passwords or passphrases is essential; the longer the password, the more billions of years it would take for a brute force attack to succeed. Using account lockout policies after a few failed attempts is a primary technical defense against this.",
    "how do i secure my home wi-fi": "Securing a home Wi-Fi network requires changing the default administrative credentials on your router to a strong, unique password and ensuring the network uses WPA3 or WPA2 encryption. You should also change the default SSID (Network Name) to something that doesn't identify you or your router's model. Disabling 'WPS' (Wi-Fi Protected Setup) is also recommended, as it is a common vulnerability. Finally, keeping your router's firmware updated ensures that you are protected against the latest network-level exploits discovered by researchers."
};

function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender === 'user' ? 'user-msg' : 'bot-msg');
    msgDiv.innerHTML = text; 
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function handleChat() {
    const text = userInput.value.trim().toLowerCase();
    if (!text) return;
    addMessage(userInput.value, 'user');
    userInput.value = '';
    
    let responseFound = false;
    for (const [key, answer] of Object.entries(knowledgeBase)) {
        if (text.includes(key)) {
            setTimeout(() => addMessage(answer, 'bot'), 700);
            responseFound = true;
            break;
        }
    }

    if (!responseFound) {
        setTimeout(() => addMessage("I am CyVoid. To provide you with the most accurate, evidence-based data from our research, please ask specifically about: cybersecurity threats, malware, phishing, ransomware, man in the middle, ddos, mfa, firewalls, encryption, zero trust, or how to avoid them.", 'bot'), 700);
    }
}

if(userInput) {
    userInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') handleChat();
    });
}, where no application or user is trusted by default, significantly limits the lateral movement of malware if an initial infection occurs.",
    "avoid phishing": "The cornerstone of avoiding phishing attacks lies in developing a deep-seated, healthy skepticism toward any unsolicited communication, particularly those that weaponize urgency or demand immediate access to sensitive credentials or financial resources. Before interacting with any link, users must meticulously inspect the sender's email address for subtle, easily missed anomalies—such as replacing the letter 'l' with the number '1' in a corporate domain name. It is heavily recommended to entirely bypass embedded links; instead, users should manually navigate to the organization's official website via a search engine or a trusted bookmark to authenticate the communication. Crucially, the mandatory enforcement of robust Multi-Factor Authentication (MFA) across all digital platforms ensures that even if a user falls victim to a deceptive phishing lure, the attacker cannot leverage the stolen password alone."
};

function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender === 'user' ? 'user-msg' : 'bot-msg');
    msgDiv.innerHTML = text; 
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function handleChat() {
    const text = userInput.value.trim().toLowerCase();
    if (!text) return;
    addMessage(userInput.value, 'user');
    userInput.value = '';
    
    let responseFound = false;
    for (const [key, answer] of Object.entries(knowledgeBase)) {
        if (text.includes(key)) {
            setTimeout(() => addMessage(answer, 'bot'), 700);
            responseFound = true;
            break;
        }
    }

    if (!responseFound) {
        setTimeout(() => addMessage("I am CyVoid. To provide you with the most accurate, evidence-based data from our research, please ask specifically about: cybersecurity threats, malware, phishing, ransomware, man in the middle, ddos, social engineering, or how to avoid them.", 'bot'), 700);
    }
}

if(userInput) {
    userInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') handleChat();
    });
}