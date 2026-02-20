import React from 'react';

const MapEmbed: React.FC = () => {
    return (
        <div style={{ width: '100%', height: '100%', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14715.857043308277!2d75.93034471738275!3d22.76670756165778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d7c682686e9%3A0x8186e06741ebfd8b!2sMalwa%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1771524167541!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location of MIT Indore"
            />
        </div>
    );
};

export default MapEmbed;
