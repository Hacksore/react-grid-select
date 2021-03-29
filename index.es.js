import React, { useState, useEffect } from 'react';

function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

function clsx () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x;
			}
		}
	}
	return str;
}

var Cell = function (_a) {
    var coords = _a.coords, activeCell = _a.activeCell, onClick = _a.onClick, hoverCell = _a.hoverCell, onMouseEnter = _a.onMouseEnter;
    var isActive = function () {
        if (coords.x <= activeCell.x && coords.y <= activeCell.y) {
            return true;
        }
        return false;
    };
    var isHover = function () {
        if (hoverCell && coords.x <= hoverCell.x && coords.y <= hoverCell.y) {
            return true;
        }
        return false;
    };
    return (React.createElement("div", { className: clsx("cell", {
            active: isActive(),
            hoverCell: isHover(),
        }), onClick: onClick, onMouseEnter: onMouseEnter }));
};
var GridSelect = function (_a) {
    var onRegionUpdate = _a.onRegionUpdate, _b = _a.rows, rows = _b === void 0 ? 1 : _b, _c = _a.cols, cols = _c === void 0 ? 1 : _c;
    var _d = useState({
        x: 0,
        y: 0,
    }), activeCell = _d[0], setActiveCell = _d[1];
    var _e = useState(null), hoverCell = _e[0], setHoverCell = _e[1];
    useEffect(function () {
        onRegionUpdate({
            width: activeCell.x,
            height: activeCell.y,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeCell]);
    // grid setting
    var gridCss = {
        gridTemplateColumns: Array(cols).fill("24px").join(" "),
        gridGap: 5,
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "wrapper", style: gridCss, onMouseLeave: function () { return setHoverCell(null); } }, Array(cols * rows)
            .fill(0)
            .map(function (item, index) {
            var coords = {
                x: index % rows,
                y: Math.floor(index / rows),
            };
            return (React.createElement(Cell, { coords: coords, key: index, onClick: function () { return setActiveCell(coords); }, onMouseEnter: function () { return setHoverCell(coords); }, activeCell: activeCell, hoverCell: hoverCell }));
        }))));
};

export { GridSelect };
//# sourceMappingURL=index.es.js.map
