/*
 * Copyright 2012 Closure Compiler Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Definitions for the Media Source Extensions.
 * @see http://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/media-source.html
 *
 * @externs
 */

/**
 * @constructor
 * @implements {EventTarget}
 */
function MediaSource() {}

/** @override */
MediaSource.prototype.addEventListener = function(
    type, listener, useCapture) {};

/** @override */
MediaSource.prototype.removeEventListener = function(
    type, listener, useCapture) {};

/** @override */
MediaSource.prototype.dispatchEvent = function(evt) {};

/** @type {Array} */
MediaSource.prototype.sourceBuffers;

/** @type {Array} */
MediaSource.prototype.activeSourceBuffers;

/** @type {number} */
MediaSource.prototype.duration;

/**
 * @param {string} type
 * @return {SourceBuffer}
 */
MediaSource.prototype.addSourceBuffer = function(type) {};

/**
 * @param {SourceBuffer} sourceBuffer
 */
MediaSource.prototype.removeSourceBuffer = function(sourceBuffer) {};

/** @type {string} */
MediaSource.prototype.readyState;

/**
 * @param {string=} opt_error
 */
MediaSource.prototype.endOfStream = function(opt_error) {};


/**
 * @constructor
 * @implements {EventTarget}
 */
function SourceBuffer() {}

/** @override */
SourceBuffer.prototype.addEventListener = function(
    type, listener, useCapture) {};

/** @override */
SourceBuffer.prototype.removeEventListener = function(
    type, listener, useCapture) {};

/** @override */
SourceBuffer.prototype.dispatchEvent = function(evt) {};

/** @type {TimeRanges} */
SourceBuffer.prototype.buffered;

/** @type {number} */
SourceBuffer.prototype.timestampOffset;

/**
 * @param {Uint8Array} data
 */
SourceBuffer.prototype.append = function(data) {};

/**
 * Abort the current segment append sequence.
 */
SourceBuffer.prototype.abort = function() {};
