var _default_vert = require("../Shaders/ccShader_Default_Vert.js");
var _gray_frag = require("../Shaders/ccShader_Gray_Frag.js");

cc.Class({
    extends: cc.Component,

    properties: {
            
    },

    onLoad: function () {
        this._use();
    },

    _use: function()
    {
        this._program = new cc.GLProgram();
        this._program.initWithVertexShaderByteArray(_default_vert, _gray_frag);

        this._program.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION);
        this._program.addAttribute(cc.ATTRIBUTE_NAME_COLOR, cc.VERTEX_ATTRIB_COLOR);
        this._program.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS);
        this._program.link();
        this._program.updateUniforms();

        cc.setProgram( this.node._sgNode, this._program );
    },
    
});
