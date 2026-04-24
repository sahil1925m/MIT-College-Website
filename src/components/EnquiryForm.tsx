import React from 'react';
import { ArrowRight, FileCheck } from 'lucide-react';

interface EnquiryFormProps {
    variant?: 'full' | 'mini';
}

const REGISTRATION_URL = "https://forms.zohopublic.in/lakshya2025miti1/form/CollegeRegistrationForm/formperma/bW1CsY15bWQWYeLV6_DHEHzn6lVy8u5-7K8zOwu42Es";

const EnquiryForm: React.FC<EnquiryFormProps> = ({ variant = 'full' }) => {
    return (
        <div className={`register-cta-card ${variant === 'mini' ? 'variant-mini' : 'variant-full'}`}>
            {/* Decorative Background Elements */}
            <div className="cta-bg-shape shape-1" />
            <div className="cta-bg-shape shape-2" />
            
            <div className="card-icon-wrapper">
                <FileCheck size={40} strokeWidth={1.5} />
                <div className="icon-glow" />
            </div>
            
            <div className="card-text-content">
                <h3>Ready to Secure Your Future?</h3>
                <p>
                    Take the first step towards a brilliant career. Fill out our quick online registration form to begin your admission process at MIT Indore.
                </p>
            </div>
            
            <a 
                href={REGISTRATION_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary register-btn"
            >
                Register Online <ArrowRight size={20} className="arrow-icon" />
            </a>

            <style>{`
                .register-cta-card {
                    background: linear-gradient(145deg, #ffffff, #f8fafc);
                    border-radius: 32px;
                    box-shadow: 0 40px 80px rgba(10,15,30,0.06), 0 0 0 1px rgba(0,0,0,0.02);
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 1.5rem;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
                
                .register-cta-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 50px 100px rgba(10,15,30,0.1), 0 0 0 1px rgba(198,40,40,0.15);
                }

                /* Decorative floating shapes */
                .cta-bg-shape {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(40px);
                    z-index: 0;
                    opacity: 0.6;
                    pointer-events: none;
                }
                .shape-1 {
                    width: 250px; height: 250px;
                    background: rgba(198, 40, 40, 0.08);
                    top: -100px; right: -80px;
                }
                .shape-2 {
                    width: 200px; height: 200px;
                    background: rgba(10, 15, 30, 0.04);
                    bottom: -80px; left: -60px;
                }

                .register-cta-card.variant-mini {
                    padding: 3.5rem 2.5rem;
                }

                .register-cta-card.variant-full {
                    padding: 5rem 4rem;
                }

                .card-icon-wrapper {
                    width: 90px;
                    height: 90px;
                    background: var(--white);
                    box-shadow: 0 15px 35px rgba(198,40,40,0.15), 0 0 0 1px rgba(198,40,40,0.05);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--crimson);
                    margin-bottom: 0.8rem;
                    position: relative;
                    z-index: 1;
                }

                .icon-glow {
                    position: absolute;
                    inset: -15px;
                    background: radial-gradient(circle, rgba(198,40,40,0.2) 0%, transparent 70%);
                    z-index: -1;
                    border-radius: 50%;
                }

                .card-text-content {
                    position: relative;
                    z-index: 1;
                }

                .card-text-content h3 {
                    font-size: 2.6rem;
                    color: var(--navy);
                    font-family: var(--font-serif);
                    margin-bottom: 1.2rem;
                    line-height: 1.15;
                    letter-spacing: -0.02em;
                }

                .register-cta-card.variant-mini .card-text-content h3 {
                    font-size: 2rem;
                }

                .card-text-content p {
                    color: var(--text-muted);
                    font-size: 1.15rem;
                    max-width: 480px;
                    margin: 0 auto 1rem;
                    line-height: 1.7;
                }

                .register-btn {
                    padding: 1.2rem 3.5rem;
                    font-size: 1.15rem;
                    border-radius: 50px;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.8rem;
                    justify-content: center;
                    text-decoration: none;
                    position: relative;
                    z-index: 1;
                    box-shadow: 0 15px 30px rgba(198,40,40,0.3);
                    transition: all 0.3s ease;
                }
                
                .register-btn:hover {
                    box-shadow: 0 20px 40px rgba(198,40,40,0.45);
                    transform: translateY(-2px);
                }

                .register-cta-card.variant-mini .register-btn {
                    width: 100%;
                }

                @media (max-width: 640px) {
                    .register-cta-card {
                        gap: 1rem;
                    }
                    .register-cta-card.variant-full {
                        padding: 3rem 1.5rem;
                        border-radius: 20px;
                    }
                    .register-cta-card.variant-mini {
                        padding: 2.5rem 1.5rem;
                        border-radius: 20px;
                    }
                    .card-text-content h3 {
                        font-size: 2rem;
                    }
                    .register-cta-card.variant-mini .card-text-content h3 {
                        font-size: 1.6rem;
                    }
                    .card-text-content p {
                        font-size: 1rem;
                    }
                    .register-btn {
                        padding: 1rem 2rem;
                        font-size: 1rem;
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
};

export default EnquiryForm;
