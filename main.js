document.querySelectorAll('.nav-buttons a').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const section = btn.dataset.section;
    const box = document.getElementById('textbox');

    if(section === 'about'){
    box.innerHTML = 'Welcome to Chocomail!<br><br>' +
    'Chocomail is a privacy-focused email platform created to ensure you maintain complete control over your data. Whether you need long-term secure messaging or a quick, disposable address for temporary use, Chocomail provides the tools necessary maintaining privacy without sacrificing convenience.<br><br>' +
    'Our secure email service uses end-to-end encryption to ensure that only you and your intended recipients can read your messages. All transfers utilize TLS 1.3 with Perfect Forward Secrecy, making interception or reconstruction of your emails essentially impossible. Your data is held securely on our servers only for the time necessary; once this data has been forwarded to you, the data will only exist in the cache of your chosen client, then wiped off of our servers. Once your cache is cleared, your data is irreversibly lost.<br><br>' +
    'Chocomail also offers temporary email addresses that expire after a short period. These disposable addresses protect your identity, prevent spam, and allow for safe one-time registrations or testing.<br><br>' +
    'To learn more about the technicalities/inner-workings of Chocomail, <a href="/technical" target="_blank">click here</a>.';
    } else if(section === 'contact'){
      box.innerHTML = 'Session:<br>05258bd607bde035109b0084a640dc6f6b94f736b4c84b70d0a46b4c8abaec0612';
    } else if(section === 'login'){
      box.innerHTML = 'Chocomail is currently private!<br><br>This does not mean we will never be public, but for the time being, Chocomail is an invite-only platform. Only friends of the developer may get an invite, at which how you use Chocomail determines how secure it is. Everything is secure if you make it secure.<br><br>~ D/S';
    }
  });
});
