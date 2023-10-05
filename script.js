// Your code here.
 function handleMouseUp() {
            isDragging = false;
        }

        document.querySelectorAll('.cube').forEach(cube => {
            cube.addEventListener('mousedown', handleMouseDown);
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        });