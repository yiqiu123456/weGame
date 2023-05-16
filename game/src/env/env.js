import '../adapter/index'
import { ShaderSystem } from '@pixi/core';
import { install } from '@pixi/unsafe-eval';

// Apply the patch to PIXI
install({ ShaderSystem });
