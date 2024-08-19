import TailwindJssLogo from './assets/TW2JSSLogo';

function App() {
  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        flexDirection: 'column',
        gap: '30px',
        padding: '30px',
      }}
    >
      <TailwindJssLogo height={200} />
      <span style={{ letterSpacing: 1.5, textAlign: 'center' }}>
        🚧This website is currently under development. Stay tuned for updates!
        Explore the project’s code on{' '}
        <a href="https://github.com/RicardoMoraisPOR/tw-to-jss/tree/dev">
          GitHub
        </a>
        .🚧
      </span>
    </main>
  );
}

export default App;
