

precision mediump float;



uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

#define PI 3.1415926538

void main() {


   vec2 st = gl_FragCoord.xy/u_resolution;
    st = (st-.5)*1.1912+.5;
    if (u_resolution.y > u_resolution.x ) {
        st.y *= u_resolution.y/u_resolution.x;
        st.y -= (u_resolution.y*.5-u_resolution.x*.5)/u_resolution.x;
    } else {
        st.x *= u_resolution.x/u_resolution.y;
        st.x -= (u_resolution.x*.5-u_resolution.y*.5)/u_resolution.y;
    }


    vec3 col = vec3(.0);

    float dev = (sin(u_time)*0.5 + 1.) *0.4;
    
    col += step(0.5, .5 * (st.x-dev)  + st.y*(.5 + dev)  ) ;

    gl_FragColor = vec4(col,1.0);
}
