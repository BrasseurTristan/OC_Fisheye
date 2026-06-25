'use client'

import { useState } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm({ photographerName }) {
    const [isOpen, setIsOpen] = useState(false)

    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const { prenom, nom, email, message } = Object.fromEntries(new FormData(e.target))
        console.log('Prénom :', prenom)
        console.log('Nom :', nom)
        console.log('Email :', email)
        console.log('Message :', message)
        close()
    }

    return (
        <>
            <button
                type="button"
                className={styles.contact}
                aria-haspopup="dialog"
                aria-label="Contact Me"
                onClick={open}
            >
                Contactez-moi
            </button>

            {isOpen && (
                <div className={styles.overlay} onMouseDown={close}>
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="contact-modal-title"
                        className={styles.modal}
                        onMouseDown={(e) => e.stopPropagation()}
                    >
                        <header className={styles.modalHeader}>
                            <h2 id="contact-modal-title" className={styles.title}>
                                Contactez-moi<br />{photographerName}
                            </h2>
                            <button
                                type="button"
                                className={styles.close}
                                aria-label="Fermer le formulaire de contact"
                                onClick={close}
                            >
                                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                </svg>
                            </button>
                        </header>

                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.field}>
                                <label id="label-prenom" htmlFor="prenom">Prénom</label>
                                <input id="prenom" type="text" name="prenom" aria-labelledby="label-prenom" />
                            </div>

                            <div className={styles.field}>
                                <label id="label-nom" htmlFor="nom">Nom</label>
                                <input id="nom" type="text" name="nom" aria-labelledby="label-nom" />
                            </div>

                            <div className={styles.field}>
                                <label id="label-email" htmlFor="email">Email</label>
                                <input id="email" type="email" name="email" aria-labelledby="label-email" />
                            </div>

                            <div className={styles.field}>
                                <label id="label-message" htmlFor="message">Votre message</label>
                                <textarea id="message" name="message" rows={5} aria-labelledby="label-message" />
                            </div>

                            <button type="submit" className={styles.submit}>Envoyer</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}
