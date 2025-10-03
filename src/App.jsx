import Desktop from './components/Desktop';
import CustomAppBar from './components/AppBar';

const App = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, position: 'relative' }}>
        <Desktop />
      </div>
      <CustomAppBar />
    </div>
  );
};

export default App;
