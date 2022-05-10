export default function Captcha() {
  return (
    <div>
      <div
        className="grecaptcha-badge"
        data-style="bottomright"
        style={{
          width: '256px',
          height: '60px',
          display: 'block',
          transition: 'right 0.3s ease 0s',
          position: 'fixed',
          bottom: '14px',
          right: '-186px',
          boxShadow: 'gray 0px 0px 5px',
          borderRadius: '2px',
          overflow: 'hidden',
        }}
      >
        <div className="grecaptcha-logo">
          <iframe
            title="reCAPTCHA"
            src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp,k=6LfbCpkcAAAAAMqmEguoTF4vpXJNZV4iT870m6Ay&amp;co=aHR0cHM6Ly9rY3N0YXJkdXN0LmNvbTo0NDM.&amp;hl=en&amp;v=nEGwmCAyCoKVn9PSwAGnQWhY&amp;size=invisible&amp;cb=cc2s28ukn4k"
            role="presentation"
            name="a-rrx4l4k576ku"
            scrolling="no"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation 
              allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
            width="256"
            height="60"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="grecaptcha-error"></div>
        <textarea
          id="g-recaptcha-response-100000"
          name="g-recaptcha-response"
          className="g-recaptcha-response"
          style={{
            width: '250px',
            height: '40px',
            border: '1px solid rgb(193, 193, 193)',
            margin: '10px 25px',
            padding: '0px',
            resize: 'none',
            display: 'none',
          }}
        ></textarea>
      </div>
      <iframe style={{ display: 'none' }}></iframe>
    </div>
  );
}
