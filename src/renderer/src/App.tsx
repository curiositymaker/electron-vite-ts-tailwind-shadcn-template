import Versions from './components/Versions'
import electronLogo from '@assets/electron.svg'
import { Button } from '@/components/ui/button'

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <img
        alt="logo"
        src={electronLogo}
        className="mb-4 h-32 w-32 cursor-default select-none transition-all duration-300 ease-linear hover:drop-shadow-[0_0_1.2em_#6988e6aa]" // Reduced bottom margin
      />

      <div className="mb-4 text-sm font-semibold text-muted-foreground">
        Powered by electron-vite
      </div>

      <div className="mb-4 text-2xl font-bold text-foreground md:text-xl">
        <Button variant="default" size="lg" className="mb-4">
          Click Me
        </Button>
        <br />
        Namaste India{' '}
        <span className="bg-gradient-to-br from-[#087ea4] from-55% to-[#7c93ee] bg-clip-text font-bold text-transparent">
          React
        </span>
        &nbsp;and&nbsp;
        <span className="bg-gradient-to-br from-[#3178c6] from-45% to-[#f0dc4e] bg-clip-text font-bold text-transparent">
          TypeScript
        </span>
      </div>

      <p className="mb-6 text-base font-semibold text-muted-foreground">
        Please try pressing
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[85%] font-semibold text-muted-foreground">
          F12
        </code>{' '}
        to open the devTool
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <Button variant="secondary" asChild>
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </Button>
        <Button variant="secondary" onClick={ipcHandle}>
          Send IPC
        </Button>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 transform">
        <Versions />
      </div>
    </div>
  )
}

export default App
