import Desktop from './components/Desktop';
import CustomAppBar from './components/AppBar';

const App = () => {
  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      {/* Desktop fills full space */}
      <Desktop />

      {/* Fixed AppBar will ignore this layout and stick at bottom */}
      <CustomAppBar />
    </div>
  );
};

export default App;
