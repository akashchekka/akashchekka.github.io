import React from 'react'

function Resume() {
    return (
        <div style={{height: '100vh', width: '100vw', backgroundColor: '#3d3939'}}>
            <object width="400" height="500" type="application/pdf" data={`/src/Resume.pdf?#zoom=85&scrollbar=0&toolbar=0&navpanes=0`}>
                <p>Insert your error message here, if the PDF cannot be displayed.</p>
            </object>
        </div>
    )
}

export default Resume
