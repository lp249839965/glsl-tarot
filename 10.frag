precision mediump float;
uniform vec2 resolution;

float PI = 3.14159265;


float rectSDF(vec2 st){
  return max(abs(st).x, abs(st).y);
}

float stroke(float x, float s, float w){
  float d = step(s, x+w*.5) -
            step(s, x-w*.5);
  return clamp(d, 0., 1.);
}

float fill(float x, float size){
  return 1.-step(size, x);
}

void main(){
  vec3 color = vec3(0.);
  vec2 uv = (gl_FragCoord.xy * 2.0 - resolution) / resolution.y;
  color += stroke(rectSDF(uv), 0.5, .125);
  color += fill(rectSDF(uv), .1);

  gl_FragColor = vec4(color, 1.);
}
