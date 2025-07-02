import styles from './styles.module.css'

type DefaultButtonProps = {
	icon: React.ReactNode,
	children?: React.ReactNode,
	color?: 'green' | 'red'
} & React.ComponentProps<'button'>

export function DefaultButton({ 
	icon, 
	children, 
	color = 'green',
	...props 
}: DefaultButtonProps) {
	return (
		<>
			<button className={`${styles.button} ${styles[color]}`} {...props}>
				{icon} {children}
			</button>
		</>
	)
}