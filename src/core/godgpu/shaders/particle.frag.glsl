precision highp float;

varying float vEnergy;

void main() {
  float glow = 1.0 - distance(gl_PointCoord, vec2(0.5));
  glow = smoothstep(0.2, 1.0, glow);

  vec3 color = mix(
    vec3(0.0, 0.4, 1.0),
    vec3(0.0, 1.0, 0.9),
    vEnergy
  );

  float fog = exp(-gl_FragCoord.z * 0.02);

  gl_FragColor = vec4(color * glow * fog, glow);
}
