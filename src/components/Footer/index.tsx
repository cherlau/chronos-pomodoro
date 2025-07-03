import styles from './styles.module.css'

export function Footer() {
	return <footer className={styles.footer}>
		<a href="">Entenda como funciona a técnica pomodoro &#127813;</a>
		<a href="">Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com &#128154;</a>
	</footer>
}