var particles = [];
var width;
var height;
var numParticles;
var maxSpeed;
var maxSize;
var distanceThreshold;
var frame;

const initSvg = (element) => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  svg.id = 'particles-frame';
  svg.style.position = 'absolute';
  svg.style.top = 0;
  svg.style.right = 0;
  svg.style.left = 0;
  svg.style.bottom = 0;
  svg.style.width = width;
  svg.style.height = height;

  svg.setAttributeNS(
    null,
    'viewbox',
    `-${distanceThreshold}, -${distanceThreshold}, ${
      width + distanceThreshold
    }, ${height + distanceThreshold}`
  );
  element.appendChild(svg);
  frame = svg;
};

const generateEdgePosition = () => {
  const genPos = (axisLength) =>
    Math.random() * (axisLength + distanceThreshold * 2) - distanceThreshold;

  let x;
  let y;
  let edge = Math.floor(Math.random() * 4);
  switch (edge) {
    case 0:
      x = -distanceThreshold;
      y = genPos(height);
      break;
    case 1:
      x = width + distanceThreshold;
      y = genPos(height);
      break;
    case 2:
      x = genPos(height);
      y = -distanceThreshold;
      break;
    default:
      x = genPos(height);
      y = height + distanceThreshold;
      break;
  }

  return { x, y };
};

const createParticle = (onEdge = false) => {
  let pos = onEdge
    ? generateEdgePosition()
    : {
        x: Math.random() * width,
        y: Math.random() * height,
      };

  const particle = {
    ...pos,
    vx: Math.random() * (maxSpeed * 2) - maxSpeed,
    vy: Math.random() * (maxSpeed * 2) - maxSpeed,
    size: maxSize,
  };

  const node = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  node.setAttributeNS(null, 'cx', particle.x.toString());
  node.setAttributeNS(null, 'cy', particle.y.toString());
  node.setAttributeNS(null, 'r', particle.size.toString());
  node.setAttributeNS(null, 'fill', 'black');
  frame.appendChild(node);
  return { ...particle, node };
};

const destroyParticle = (particle) => {
  particle.node.remove();
  particles.splice(particles.indexOf(particle), 1);
};

const resetParticle = (particle) => {
  destroyParticle(particle);
  let newParticle = createParticle(true);
  particles.push(newParticle);
  animateParticle(newParticle);
};

const animateParticle = (particle) => {
  const { x, y, vx, vy, node } = particle;
  let timeToBound = 0;
  let dx;
  let dy;

  // Find the time it will take for the particle to reach the edge
  if (vy < 0 && vx < 0) {
    dx = -distanceThreshold - x;
    dy = -distanceThreshold - y;
    let ttt = dy / vy;
    let ttl = dx / vx;
    timeToBound = Math.min(ttt, ttl);
  } else if (vy < 0 && vx >= 0) {
    dx = width + distanceThreshold - x;
    dy = -distanceThreshold - y;
    let ttr = dx / vx;
    let ttt = dy / vy;
    timeToBound = Math.min(ttt, ttr);
  } else if (vy >= 0 && vx < 0) {
    dx = -distanceThreshold - x;
    dy = height + distanceThreshold - y;
    let ttl = dx / vx;
    let ttb = dy / vy;
    timeToBound = Math.min(ttb, ttl);
  } else {
    dx = width + distanceThreshold - x;
    dy = height + distanceThreshold - y;
    let ttr = dx / vx;
    let ttb = dy / vy;
    timeToBound = Math.min(ttb, ttr);
  }

  node.style.animationDuration = `${timeToBound}s`;
  node.style.transform = `translate(${dx}px, ${dy}px)`;
  setTimeout(() => {
    resetParticle(particle);
  }, timeToBound * 1000);
};

const init = (
  element,
  config = {
    maxSpeed: 10,
    maxSize: 2,
    distanceThreshold: 10,
    numParticles: 50,
  }
) => {
  width = element.offsetWidth;
  height = element.offsetHeight;
  maxSize = config.maxSize;
  maxSpeed = config.maxSpeed;
  distanceThreshold = config.distanceThreshold;
  numParticles = config.numParticles;

  initSvg(element);
  for (let i = 0; i < numParticles; i++) {
    particles.push(createParticle());
  }
  particles.forEach(animateParticle);
};

export default init;
