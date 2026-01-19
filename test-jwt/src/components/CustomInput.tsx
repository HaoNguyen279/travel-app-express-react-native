import styles from './CustomInput.module.css';

type Props = {
    label?: string;
    placeholder?: string;
    type?: string;
    setTextParent?: (text: string) => void;
};

export default function CustomInput({ label, placeholder, type = 'text', setTextParent }: Props) {
    return (
        <div className={styles.inputGroup}>
            {label && <label className={styles.label}>{label}</label>}
            <div className={styles.inputWrapper}>
                <input
                    className={styles.input}
                    type={type}
                    placeholder={placeholder}
                    onChange={(e) => {
                        setTextParent && setTextParent(e.target.value);
                    }}
                />
            </div>
        </div>
    );
}