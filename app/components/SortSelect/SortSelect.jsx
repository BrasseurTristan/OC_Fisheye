'use client';

import { useState } from 'react';
import styles from './SortSelect.module.css';

export default function SortSelect({value, onChange }) {
    const [open, setOpen] = useState(false);

    const options = [
        {value: 'popularity', label: 'Popularité'},
        {value: 'date', label: 'Date'},
        {value: 'title', label: 'Titre'}
    ]
    const selected = options.find((option) => option.value === value) ?? options[0];

    function handleSelect(option) {
        onChange(option.value);
        setOpen(false);
    }

    return (
        <div className={styles.container}>
            <label className={styles.label} id="sort-label">Trier par</label>
            <div className={styles.select}>
                <button
                    type="button"
                    className={styles.trigger}
                    aria-haspopup="listbox"
                    aria-expanded={open}
                    aria-labelledby="sort-label"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <span>{selected.label}</span>
                    <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`} aria-hidden="true" />
                </button>

                {open && (
                    <ul className={styles.list} role="listbox" aria-labelledby="sort-label">
                        {options
                            .filter((option) => option.value !== selected.value)
                            .map((option) => (
                                <li key={option.value} role="option" aria-selected={false} className={styles.option} onClick={() => handleSelect(option)}>
                                        {option.label}
                                </li>
                            ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
