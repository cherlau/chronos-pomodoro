import './styles/theme.css'
import './styles/global.css'
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>heading
		<button>
			<TimerIcon/>
		</button>
	  </Heading>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
        laudantium qui adipisci id cumque quod et numquam neque. Corporis veniam
        qui dolorem voluptates voluptatibus voluptatem repellendus vel neque
        soluta! Quibusdam!
      </p>
    </>
  );
}