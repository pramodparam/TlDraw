import { Tldraw } from '@tldraw/tldraw'
// import '@tldraw/tldraw/tldraw.css'

export default function TLDraw() {
	return (
    
		<div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh"
          }}>
			<Tldraw />
		</div>
	)
    }