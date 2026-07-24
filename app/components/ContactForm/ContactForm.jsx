'use client'

import { useRef } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm({ photographerName }) {
    const dialogRef = useRef(null)

    const open = () => dialogRef.current.showModal()
    const close = () => dialogRef.current.close()

    const handleSubmit = (e) => {
        e.preventDefault()
        const { prenom, nom, email, message } = Object.fromEntries(new FormData(e.target))
        console.log('Prénom :', prenom)
        console.log('Nom :', nom)
        console.log('Email :', email)
        console.log('Message :', message)
        close()
    }
    const handleClick = (e) => {
        if (e.target === dialogRef.current) close()
    }

    return (
        <>
            <button
                type="button"
                className={styles.contact}
                aria-haspopup="dialog"
                onClick={open}
            >
                Contactez-moi
            </button>

            <dialog
                ref={dialogRef}
                className={styles.modal}
                aria-labelledby="contact-modal-title"
                onClick={handleClick}
            >
                <header className={styles.modalHeader}>
                    <h2 id="contact-modal-title" className={styles.title}>
                        Contactez-moi<br />{photographerName}
                    </h2>
                    <button
                        type="button"
                        className={styles.close}
                        aria-label="Close contact form"
                        onClick={close}
                    >
                        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                    </button>
                </header>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.field}>
                        <label htmlFor="prenom">Prénom</label>
                        <input id="prenom" type="text" name="prenom" />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="nom">Nom</label>
                        <input id="nom" type="text" name="nom" />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email" />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="message">Votre message</label>
                        <textarea id="message" name="message" rows={5} />
                    </div>

                    <button type="submit" className={styles.submit}>Envoyer</button>
                </form>
            </dialog>
        </>
    )
}
