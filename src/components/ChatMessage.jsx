import React from "react";

export default function ChatMessage({ text, name, logo, email, user }) {
    return (
        <>
            <div >
                {user.email === email ? (
                    <div className="d-flex justify-content-end right-content">
                        <div className="message-name-right">{name}</div>
                        <span className="message-right">
                            <span className="message-text">{text}</span>
                            <img src={logo} alt="logo" className="logo-icon" />
                        </span>
                    </div>
                ) : (
                    <div className="d-flex justify-content-start left-content">
                        <div className="message-name-left">{name}</div>
                        <span className="message-left">
                            <img src={logo} alt="logo" className="logo-icon" />
                            <span className="message-text">{text}</span>
                        </span>
                    </div>
                )}
            </div>
        </>
    );
}
