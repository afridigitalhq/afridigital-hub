attribute vec3 position;
attribute vec3 velocity;

uniform float time;
uniform float energy;

varying float vEnergy;

void main() {
  vec3 pos = position;

  pos.x += sin(time + position.y) * energy * 2.0;
  pos.y += cos(time + position.x) * energy * 2.0;
  pos.z += sin(time * 0.5) * energy * 1.5;

  vEnergy = energy;

  gl_PointSize = 3.0 + energy * 8.0;
  gl_Position = vec4(pos, 1.0);
}
