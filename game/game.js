var UP = 0;
var DOWN = 1;
var LEFT = 2;
var RIGHT = 3;
var LEFTUP = 4;
var LEFTDOWN = 5;
var RIGHTUP = 6;
var RIGHTDOWN = 7;
var STOP = 8;
//-------------------------------------------------------------------
var AIMBULLET = 8;
var MISSILE = 9;
//-------------------------------------------------------------------
var NOSKILL = -1;
var MISSILESKILL = 0;
var POWERSKILL = 1;
//-------------------------------------------------------------------
var BEFORESTART = 0;
var GAMMING = 1;
var GAMEOVER = 2;
var alphabetGameOver = {};
alphabetGameOver.G = [[1, 0], [2, 0], [3, 0], [4, 0], [0, 1], [0, 2], [0, 3], [2, 3], [3, 3], [4, 3], [0, 4], [4, 4], [0, 5], [4, 5], [1, 6], [2, 6], [3, 6], [4, 6]];
alphabetGameOver.A = [[2, 0], [1, 1], [3, 1], [0, 2], [4, 2], [0, 3], [4, 3], [0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [0, 5], [4, 5], [0, 6], [4, 6]];
alphabetGameOver.M = [[0, 0], [4, 0], [0, 1], [1, 1], [3, 1], [4, 1], [0, 2], [2, 2], [4, 2], [0, 3], [2, 3], [4, 3], [0, 4], [4, 4], [0, 5], [4, 5], [0, 6], [4, 6]];
alphabetGameOver.E = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [0, 1], [0, 2], [0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [0, 4], [0, 5], [0, 6], [1, 6], [2, 6], [3, 6], [4, 6]];
alphabetGameOver.O = [[1, 0], [2, 0], [3, 0], [0, 1], [4, 1], [0, 2], [4, 2], [0, 3], [4, 3], [0, 4], [4, 4], [0, 5], [4, 5], [1, 6], [2, 6], [3, 6]];
alphabetGameOver.V = [[0, 0], [4, 0], [0, 1], [4, 1], [0, 2], [4, 2], [0, 3], [4, 3], [0, 4], [4, 4], [1, 5], [3, 5], [2, 6]];
alphabetGameOver.R = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 1], [0, 1], [0, 2], [0, 3], [1, 3], [2, 3], [3, 3], [4, 2], [0, 4], [0, 5], [0, 6], [2, 4], [3, 5], [4, 6]];
var alphabetClick = {};
alphabetClick.C = [[1, 0], [2, 0], [3, 0], [0, 1], [0, 2], [0, 3], [1, 4], [2, 4], [3, 4]];
alphabetClick.L = [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [1, 4], [2, 4], [3, 4]];
alphabetClick.I = [[0, 0], [1, 0], [2, 0], [1, 1], [1, 2], [1, 3], [0, 4], [1, 4], [2, 4]];
alphabetClick.K = [[0, 0], [3, 0], [0, 1], [2, 1], [0, 2], [1, 2], [0, 3], [2, 3], [0, 4], [3, 4]];
var numPixel = [[[0, 0], [1, 0], [2, 0], [0, 1], [2, 1], [0, 2], [2, 2], [0, 3], [2, 3], [0, 4], [1, 4], [2, 4]], [[1, 0], [1, 1], [1, 2], [1, 3], [1, 4]], [[0, 0], [1, 0], [2, 0], [1, 2], [2, 1], [0, 2], [2, 2], [0, 3], [0, 4], [1, 4], [2, 4]], [[0, 0], [1, 0], [2, 0], [1, 2], [2, 1], [0, 2], [2, 2], [2, 3], [0, 4], [1, 4], [2, 4]], [[0, 0], [1, 2], [2, 0], [0, 1], [2, 1], [0, 2], [2, 2], [2, 3], [2, 4]], [[0, 0], [1, 0], [2, 0], [1, 2], [0, 1], [0, 2], [2, 2], [2, 3], [0, 4], [1, 4], [2, 4]], [[0, 0], [1, 0], [2, 0], [1, 2], [0, 1], [0, 2], [2, 2], [0, 3], [2, 3], [0, 4], [1, 4], [2, 4]], [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2], [2, 3], [2, 4]], [[0, 0], [1, 0], [2, 0], [1, 2], [0, 1], [2, 1], [0, 2], [2, 2], [0, 3], [2, 3], [0, 4], [1, 4], [2, 4]], [[0, 0], [1, 0], [2, 0], [1, 2], [0, 1], [2, 1], [0, 2], [2, 2], [2, 3], [0, 4], [1, 4], [2, 4]]];
var PixelDisplayer = {
    createdNew: function() {
        var pixelDisplayer = {};
        var rects;
        var smallRectsUp;
        var smallRectsDown;
        var backgraoundMargin;
        var backgraoundSize;
        var backgraoundCornerRadius;
        var skillLeftMarginLeft;
        var skillMarginTop;
        var skillRightMarginLeft;
        pixelDisplayer.setSize = function(screenSize) {
            pixelDisplayer.pixelSize = screenSize * 10 / 338;
            pixelDisplayer.pixelInterval = screenSize / 338;
            pixelDisplayer.margin = screenSize * 32 / 338;
            pixelDisplayer.smallPixelSize = screenSize * 2 / 338;
            pixelDisplayer.smallPixelUpMarginLeft = screenSize * 262 / 338;
            pixelDisplayer.smallPixelUpMarginTop = screenSize * 12 / 338;
            pixelDisplayer.smallPixelDownMarginLeft = screenSize * 286 / 338;
            pixelDisplayer.smallPixelDownMarginTop = screenSize * 312 / 338;
            backgraoundMargin = screenSize * 5 / 1080;
            backgraoundSize = screenSize - 2 * backgraoundMargin;
            backgraoundCornerRadius = screenSize * 50 / 1080;
            skillLeftMarginLeft = screenSize * 10 / 1080;
            skillMarginTop = screenSize * 153 / 338;
            skillRightMarginLeft = screenSize - skillLeftMarginLeft;
            // pixelDisplayer.marginLeft=(screenSize-25*pixelDisplayer.pixelSize-24*pixelDisplayer.pixelInterval)/2;
            rects = new Array;
            for (var m = 0; m < 25; m++) {
                rects[m] = new Array;
                for (var n = 0; n < 25; n++) {
                    rects[m][n] = [pixelDisplayer.margin + m * (pixelDisplayer.pixelSize + pixelDisplayer.pixelInterval), pixelDisplayer.margin + n * (pixelDisplayer.pixelSize + pixelDisplayer.pixelInterval)];
                }
            }
            smallRectsUp = new Array;
            for (var m = 0; m < 15; m++) {
                smallRectsUp[m] = new Array;
                for (var n = 0; n < 5; n++) {
                    smallRectsUp[m][n] = [pixelDisplayer.smallPixelUpMarginLeft + m * (pixelDisplayer.smallPixelSize + pixelDisplayer.pixelInterval), pixelDisplayer.smallPixelUpMarginTop + n * (pixelDisplayer.smallPixelSize + pixelDisplayer.pixelInterval)];
                }
            }
            smallRectsDown = new Array;
            for (var m = 0; m < 7; m++) {
                smallRectsDown[m] = new Array;
                for (var n = 0; n < 5; n++) {
                    smallRectsDown[m][n] = [pixelDisplayer.smallPixelDownMarginLeft + m * (pixelDisplayer.smallPixelSize + pixelDisplayer.pixelInterval), pixelDisplayer.smallPixelDownMarginTop + n * (pixelDisplayer.smallPixelSize + pixelDisplayer.pixelInterval)];
                }
            }
        };
        pixelDisplayer.draw = function(x, y, ctx) {
            if (x < 0 || x > 24 || y < 0 || y > 24) return;
            ctx.fillRect(rects[x][y][0], rects[x][y][1], pixelDisplayer.pixelSize, pixelDisplayer.pixelSize);
        };
        pixelDisplayer.drawSmallUp = function(x, y, ctx) {
            ctx.fillRect(smallRectsUp[x][y][0], smallRectsUp[x][y][1], pixelDisplayer.smallPixelSize, pixelDisplayer.smallPixelSize);
        };
        pixelDisplayer.drawSmallDown = function(x, y, ctx) {
            ctx.fillRect(smallRectsDown[x][y][0], smallRectsDown[x][y][1], pixelDisplayer.smallPixelSize, pixelDisplayer.smallPixelSize);
        };
        // pixelDisplayer.drawBackground = function (ctx) {
        //     ctx.beginPath();
        //     ctx.moveTo(backgraoundMargin + backgraoundCornerRadius, backgraoundMargin);
        //     ctx.arcTo(backgraoundMargin + backgraoundSize, backgraoundMargin, backgraoundMargin + backgraoundSize, backgraoundMargin + backgraoundSize, backgraoundCornerRadius);
        //     ctx.arcTo(backgraoundMargin + backgraoundSize, backgraoundMargin + backgraoundSize, backgraoundMargin, backgraoundMargin + backgraoundSize, backgraoundCornerRadius);
        //     ctx.arcTo(backgraoundMargin, backgraoundMargin + backgraoundSize, backgraoundMargin, backgraoundMargin, backgraoundCornerRadius);
        //     ctx.arcTo(backgraoundMargin, backgraoundMargin, backgraoundMargin + backgraoundCornerRadius, backgraoundMargin, backgraoundCornerRadius);
        //     ctx.closePath();
        //     ctx.fill();
        // };
        pixelDisplayer.drawSkillCountLeft = function(count, ctx) {
            ctx.beginPath();
            for (var n = 3 - count; n < 3; n++) {
                ctx.moveTo(skillLeftMarginLeft, skillMarginTop + n * (pixelDisplayer.pixelSize + pixelDisplayer.pixelInterval));
                ctx.lineTo(skillLeftMarginLeft + pixelDisplayer.pixelSize / 2, skillMarginTop + n * (pixelDisplayer.pixelSize + pixelDisplayer.pixelInterval) + pixelDisplayer.pixelSize / 2);
                ctx.lineTo(skillLeftMarginLeft, skillMarginTop + n * (pixelDisplayer.pixelSize + pixelDisplayer.pixelInterval) + pixelDisplayer.pixelSize);
            }
            ctx.closePath();
            ctx.fill();
        };
        pixelDisplayer.drawSkillCountRight = function(count, ctx) {
            ctx.beginPath();
            for (var n = 3 - count; n < 3; n++) {
                ctx.moveTo(skillRightMarginLeft, skillMarginTop + n * (pixelDisplayer.pixelSize + pixelDisplayer.pixelInterval));
                ctx.lineTo(skillRightMarginLeft - pixelDisplayer.pixelSize / 2, skillMarginTop + n * (pixelDisplayer.pixelSize + pixelDisplayer.pixelInterval) + pixelDisplayer.pixelSize / 2);
                ctx.lineTo(skillRightMarginLeft, skillMarginTop + n * (pixelDisplayer.pixelSize + pixelDisplayer.pixelInterval) + pixelDisplayer.pixelSize);
            }
            ctx.closePath();
            ctx.fill();
        };
        return pixelDisplayer;
    }
};

function signum(x) {
    if (x > 0) return 1;
    else if (x < 0) return -1;
    else return 0;
}
var Bullet = {
    createdNew: function(x, y, type) {
        var bullet = {};
        bullet.x = x;
        bullet.y = y;
        bullet.type = type;
        var count = 0;
        var speedCon = 0;
        var b = 999;
        var xInc = 0;
        var yInc = -1;
        var last = 0;
        bullet.next = function() {
            switch (bullet.type) {
                case LEFT:
                case RIGHT:
                case UP:
                case DOWN:
                case LEFTUP:
                case LEFTDOWN:
                case RIGHTUP:
                case RIGHTDOWN:
                    bullet.move(bullet.type);
                    break;
                case AIMBULLET:
                    if (count == 0) {
                        if (myPlane.x != bullet.x) {
                            xInc = signum(myPlane.x - bullet.x);
                            yInc = signum(myPlane.y - bullet.y);
                            b = (myPlane.y - bullet.y) / (myPlane.x - bullet.x);
                        } else if (myPlane.y > bullet.y) {
                            b = 999;
                            xInc = 0;
                            yInc = 1;
                        } else {
                            b = 999;
                            xInc = 0;
                            yInc = -1;
                        }
                    }
                    if (Math.abs(b) > 1) {
                        if (parseInt(count / b) != last) {
                            last = parseInt(count / b);
                            bullet.x += xInc;
                        }
                        bullet.y += yInc;
                    } else {
                        if (parseInt(b * count) != last) {
                            last = parseInt(b / count);
                            bullet.y += yInc;
                        }
                        bullet.x += xInc;
                    }
                    count++;
                    break;
                case MISSILE:
                    if (count < 6 && (speedCon = (speedCon + 1) % 5) != 1) {
                        break;
                    }
                    if (enemyGroup.length > 0) {
                        if (enemyGroup[0].x != bullet.x) {
                            xInc = signum(enemyGroup[0].x - bullet.x);
                            yInc = signum(enemyGroup[0].y - bullet.y);
                            b = (enemyGroup[0].y - bullet.y) / (enemyGroup[0].x - bullet.x);
                        } else if (enemyGroup[0].y > bullet.y) {
                            b = 999;
                            xInc = 0;
                            yInc = 1;
                        } else {
                            b = 999;
                            xInc = 0;
                            yInc = -1;
                        }
                    } else if (boss != null) {
                        if (boss.x != bullet.x) {
                            xInc = signum(boss.x - bullet.x);
                            yInc = signum(boss.y - bullet.y);
                            b = (boss.y - bullet.y) / (boss.x - bullet.x);
                        } else if (boss.y > bullet.y) {
                            b = 999;
                            xInc = 0;
                            yInc = 1;
                        } else {
                            b = 999;
                            xInc = 0;
                            yInc = -1;
                        }
                    }
                    if (Math.abs(b) > 1) {
                        if (parseInt(count / b) != last) {
                            last = parseInt(count / b);
                            bullet.x += xInc;
                        }
                        bullet.y += yInc;
                    } else {
                        if (parseInt(b * count) != last) {
                            last = parseInt(b / count);
                            bullet.y += yInc;
                        }
                        bullet.x += xInc;
                    }
                    count++;
                    break;
            }
        };
        bullet.move = function(orientation) {
            switch (orientation) {
                case LEFT:
                    bullet.x--;
                    break;
                case RIGHT:
                    bullet.x++;
                    break;
                case UP:
                    bullet.y--;
                    break;
                case DOWN:
                    bullet.y++;
                    break;
                case LEFTUP:
                    bullet.x--;
                    bullet.y--;
                    break;
                case LEFTDOWN:
                    bullet.x--;
                    bullet.y++;
                    break;
                case RIGHTUP:
                    bullet.x++;
                    bullet.y--;
                    break;
                case RIGHTDOWN:
                    bullet.x++;
                    bullet.y++;
                    break;
            }
        };
        bullet.isInScreen = function() {
            if (bullet.x < 0 || bullet.x > 24 || bullet.y < 0 || bullet.y > 24) return false;
            else return true;
        };
        return bullet;
    }
};
var MyPlane = {
    createdNew: function(x, y) {
        var myPlane = {};
        myPlane.x = x;
        myPlane.y = y;
        myPlane.pixels = new Array;
        myPlane.skillCount1 = 3;
        myPlane.skillCount2 = 3;
        var weakPointNum = 4;
        var skill = NOSKILL;
        var count = 0;
        myPlane.refreshPixels = function() {
            if (skill == NOSKILL) {
                myPlane.pixels = [
                [myPlane.x - 1, myPlane.y + 1],
                [myPlane.x, myPlane.y + 1],
                [myPlane.x + 1, myPlane.y + 1],
                [myPlane.x, myPlane.y]
            ];
            } else {
                myPlane.pixels = [
                [myPlane.x - 1, myPlane.y + 1],
                [myPlane.x, myPlane.y + 1],
                [myPlane.x + 1, myPlane.y + 1],
                [myPlane.x, myPlane.y],
                [myPlane.x - 4, myPlane.y + 1],
                [myPlane.x + 4, myPlane.y + 1]
            ];
            }
        };
        myPlane.refreshPixels();
        myPlane.startSkill = function(skillCode) {
            if (skill == NOSKILL) {
                if (skillCode == MISSILESKILL && myPlane.skillCount1 > 0) {
                    myPlane.skillCount1--;
                    skill = skillCode;
                    myPlane.refreshPixels();
                }
                if (skillCode == POWERSKILL && myPlane.skillCount2 > 0) {
                    myPlane.skillCount2--;
                    skill = skillCode;
                    myPlane.refreshPixels();
                }
            }
        };
        myPlane.move = function(orientation) {
            switch (orientation) {
                case LEFT:
                    if (myPlane.x > 1) {
                        myPlane.x--;
                        myPlane.refreshPixels();
                    }
                    break;
                case RIGHT:
                    if (myPlane.x < 23) {
                        myPlane.x++;
                        myPlane.refreshPixels();
                    }
                    break;
                case UP:
                    if (myPlane.y > 0) {
                        myPlane.y--;
                        myPlane.refreshPixels();
                    }
                    break;
                case DOWN:
                    if (myPlane.y < 23) {
                        myPlane.y++;
                        myPlane.refreshPixels();
                    }
                    break;
                case LEFTUP:
                    if (myPlane.x > 1 && myPlane.y > 0) {
                        myPlane.x--;
                        myPlane.y--;
                        myPlane.refreshPixels();
                    } else if (myPlane.x > 1) {
                        myPlane.x--;
                        myPlane.refreshPixels();
                    } else if (myPlane.y > 0) {
                        myPlane.y--;
                        myPlane.refreshPixels();
                    }
                    break;
                case RIGHTUP:
                    if (myPlane.x < 23 && myPlane.y > 0) {
                        myPlane.x++;
                        myPlane.y--;
                        myPlane.refreshPixels();
                    } else if (myPlane.x < 23) {
                        myPlane.x++;
                        myPlane.refreshPixels();
                    } else if (myPlane.y > 0) {
                        myPlane.y--;
                        myPlane.refreshPixels();
                    }
                    break;
                case RIGHTDOWN:
                    if (myPlane.x < 23 && myPlane.y < 23) {
                        myPlane.x++;
                        myPlane.y++;
                        myPlane.refreshPixels();
                    } else if (myPlane.x < 23) {
                        myPlane.x++;
                        myPlane.refreshPixels();
                    } else if (myPlane.y < 23) {
                        myPlane.y++;
                        myPlane.refreshPixels();
                    }
                    break;
                case LEFTDOWN:
                    if (myPlane.x > 1 && myPlane.y < 23) {
                        myPlane.x--;
                        myPlane.y++;
                        myPlane.refreshPixels();
                    } else if (myPlane.x > 1) {
                        myPlane.x--;
                        myPlane.refreshPixels();
                    } else if (myPlane.y < 23) {
                        myPlane.y++;
                        myPlane.refreshPixels();
                    }
                    break;
            }
        };
        myPlane.shoot = function() {
            if (skill == NOSKILL) {
                myBullets.push(Bullet.createdNew(myPlane.x, myPlane.y, UP));
            } else if (skill == MISSILESKILL) {
                myBullets.push(Bullet.createdNew(myPlane.x, myPlane.y, UP));
                if (count % 4 == 0) myBullets.push(Bullet.createdNew(myPlane.x + 4, myPlane.y + 1, MISSILE));
                if (count % 4 == 2) myBullets.push(Bullet.createdNew(myPlane.x - 4, myPlane.y + 1, MISSILE));
                if (count == 120) {
                    skill = NOSKILL;
                    myPlane.refreshPixels();
                    count = 0;
                } else count++;
            } else if (skill == POWERSKILL) {
                myBullets.push(Bullet.createdNew(myPlane.x + 4, myPlane.y + 1, RIGHT));
                myBullets.push(Bullet.createdNew(myPlane.x + 4, myPlane.y + 1, RIGHTUP));
                myBullets.push(Bullet.createdNew(myPlane.x + 4, myPlane.y + 1, UP));
                myBullets.push(Bullet.createdNew(myPlane.x + 4, myPlane.y + 1, LEFTUP));
                myBullets.push(Bullet.createdNew(myPlane.x - 4, myPlane.y + 1, LEFT));
                myBullets.push(Bullet.createdNew(myPlane.x - 4, myPlane.y + 1, RIGHTUP));
                myBullets.push(Bullet.createdNew(myPlane.x - 4, myPlane.y + 1, UP));
                myBullets.push(Bullet.createdNew(myPlane.x - 4, myPlane.y + 1, LEFTUP));
                myBullets.push(Bullet.createdNew(myPlane.x, myPlane.y, UP));
                if (count == 120) {
                    skill = NOSKILL;
                    myPlane.refreshPixels();
                    count = 0;
                } else count++;
            }
        };
        myPlane.isShot = function() {
            for (var i = 0; i < weakPointNum; i++) {
                for (var j = 0; j < enemyBullets.length; j++) {
                    if ((enemyBullets[j].x == myPlane.pixels[i][0]) && (enemyBullets[j].y == myPlane.pixels[i][1])) {
                        return j;
                    }
                }
            }
            return -1;
        };
        return myPlane;
    }
};
var Enemy = {
    createdNew: function(x, y) {
        var enemy = {};
        enemy.x = x;
        enemy.y = y;
        enemy.pixels = new Array;
        enemy.refreshPixels = function() {
            enemy.pixels = [
                [enemy.x - 1, enemy.y - 1],
                [enemy.x, enemy.y - 1],
                [enemy.x + 1, enemy.y - 1],
                [enemy.x, enemy.y]
            ];
        };
        enemy.refreshPixels();
        enemy.move = function(orientation) {
            switch (orientation) {
                case LEFT:
                    enemy.x--;
                    enemy.refreshPixels();
                    break;
                case RIGHT:
                    enemy.x++;
                    enemy.refreshPixels();
                    break;
                case UP:
                    enemy.y--;
                    enemy.refreshPixels();
                    break;
                case DOWN:
                    enemy.y++;
                    enemy.refreshPixels();
                    break;
                case LEFTUP:
                    enemy.x--;
                    enemy.y--;
                    enemy.refreshPixels();
                    break;
                case RIGHTUP:
                    enemy.x++;
                    enemy.y--;
                    enemy.refreshPixels();
                    break;
                case RIGHTDOWN:
                    enemy.x++;
                    enemy.y++;
                    enemy.refreshPixels();
                    break;
                case LEFTDOWN:
                    enemy.x--;
                    enemy.y++;
                    enemy.refreshPixels();
                    break;
            }
        };
        enemy.isInScreen = function() {
            if (enemy.x < 1 || enemy.x > 23 || enemy.y < -1 || enemy.y > 25) return false;
            else return true;
        };
        enemy.isShot = function() {
            for (var i = 0; i < enemy.pixels.length; i++) {
                for (var j = 0; j < myBullets.length; j++) {
                    if ((myBullets[j].x == enemy.pixels[i][0]) && (myBullets[j].y == enemy.pixels[i][1])) {
                        return j;
                    }
                }
            }
            return -1;
        };
        enemy.onDie = function() {};
        enemy.shoot = function() {
            enemyBullets.push(Bullet.createdNew(enemy.x, enemy.y, DOWN));
        };
        return enemy;
    }
};
var Enemy1 = {
    createdNew: function(x, y) {
        var enemy1 = Enemy.createdNew(x, y);
        var count = 0;
        enemy1.shoot = function() {
            enemyBullets.push(Bullet.createdNew(enemy1.x, enemy1.y, AIMBULLET));
        };
        enemy1.next = function() {
            enemy1.move(DOWN);
            if (count == 2) {
                enemy1.shoot();
                count = 0;
            } else count++;
        };
        return enemy1;
    }
};
var Enemy2 = {
    createdNew: function(x, y) {
        var enemy2 = Enemy.createdNew(x, y);
        var count = 0;
        enemy2.next = function() {
            if (myPlane.x < enemy2.x) enemy2.move(LEFTDOWN);
            else if (myPlane.x > enemy2.x) enemy2.move(RIGHTDOWN);
            else enemy2.move(DOWN);
            if (count == 2) {
                enemy2.shoot();
                count = 0;
            } else count++;
        };
        return enemy2;
    }
};
var Enemy3 = {
    createdNew: function(x, y) {
        var enemy3 = Enemy.createdNew(x, y);
        var status = 0;
        var count = 0;
        enemy3.shoot = function() {
            enemyBullets.push(Bullet.createdNew(enemy3.x, enemy3.y, UP));
            enemyBullets.push(Bullet.createdNew(enemy3.x, enemy3.y, DOWN));
            enemyBullets.push(Bullet.createdNew(enemy3.x, enemy3.y, LEFT));
            enemyBullets.push(Bullet.createdNew(enemy3.x, enemy3.y, RIGHT));
            enemyBullets.push(Bullet.createdNew(enemy3.x, enemy3.y, LEFTUP));
            enemyBullets.push(Bullet.createdNew(enemy3.x, enemy3.y, LEFTDOWN));
            enemyBullets.push(Bullet.createdNew(enemy3.x, enemy3.y, RIGHTUP));
            enemyBullets.push(Bullet.createdNew(enemy3.x, enemy3.y, RIGHTDOWN));
        };
        enemy3.refreshPixels = function() {
            if (status == 0) {
                enemy3.pixels = [
                [enemy3.x - 1, enemy3.y - 1],
                [enemy3.x, enemy3.y - 1],
                [enemy3.x + 1, enemy3.y - 1],
                [enemy3.x, enemy3.y]
            ];
            } else {
                enemy3.pixels = [
                [enemy3.x - 1, enemy3.y + 1],
                [enemy3.x, enemy3.y + 1],
                [enemy3.x + 1, enemy3.y + 1],
                [enemy3.x, enemy3.y]
            ];
            }
        };
        enemy3.refreshPixels();
        enemy3.next = function() {
            if (count < 10) {
                enemy3.move(DOWN);
                if (count == 5) enemy3.shoot();
            } else if (count == 10) {
                enemy3.shoot();
                status = 1;
            } else {
                enemy3.move(UP);
            }
            count++;
        };
        enemy3.onDie = function() {
            enemy3.shoot();
        };
        return enemy3;
    }
};
var Boss = {
    createdNew: function(x, y) {
        var boss = Enemy.createdNew(x, y);
        boss.count = 0;
        boss.immuneTime = 0;
        boss.life = new Array;
        boss.totalLife = new Array;
        boss.status = 0;
        boss.maxStatus = 0;
        boss.dead = false;
        boss.getHurt = function() {
            if (boss.immuneTime == 0) {
                boss.life[boss.status]--;
            }
            if (boss.life[boss.status] <= 0 && boss.status < boss.maxStatus) {
                boss.status++;
                boss.count = 0;
                score += 50;
            } else if (boss.life[boss.status] <= 0 && boss.status == boss.maxStatus) {
                boss.dead = true;
                score += 100;
            }
        };
        return boss;
    }
};
var Boss1 = {
    createdNew: function(x, y) {
        var boss1 = Boss.createdNew(x, y);
        startShake();
        boss1.count = 0;
        boss1.immuneTime = 10;
        boss1.life = [40, 40];
        boss1.totalLife = [40, 40];
        boss1.maxStatus = 1;
        boss1.guns = new Array;
        boss1.pixels = new Array;
        boss1.refreshPixels = function() {
            if (boss1.status == 0) {
                boss1.guns = [[boss1.x - 2, boss1.y - 2], [boss1.x - 2, boss1.y + 2], [boss1.x + 2, boss1.y - 2], [boss1.x + 2, boss1.y + 2]];
                boss1.pixels = [[boss1.x - 2, boss1.y - 2], [boss1.x - 2, boss1.y + 2], [boss1.x + 2, boss1.y - 2], [boss1.x + 2, boss1.y + 2],
                    [boss1.x - 1, boss1.y - 3], [boss1.x - 1, boss1.y + 3], [boss1.x, boss1.y - 3], [boss1.x, boss1.y + 3], [boss1.x + 1, boss1.y - 3],
                    [boss1.x + 1, boss1.y + 3], [boss1.x + 3, boss1.y - 1], [boss1.x + 3, boss1.y + 1], [boss1.x - 3, boss1.y - 1], [boss1.x - 3, boss1.y + 1],
                    [boss1.x, boss1.y - 1], [boss1.x, boss1.y + 1], [boss1.x - 3, boss1.y], [boss1.x + 3, boss1.y], [boss1.x - 1, boss1.y],
                    [boss1.x + 1, boss1.y], [boss1.x, boss1.y]];
            } else {
                boss1.guns = [[boss1.x, boss1.y]];
                boss1.pixels = [[boss1.x, boss1.y - 1], [boss1.x, boss1.y + 1], [boss1.x - 1, boss1.y], [boss1.x + 1, boss1.y], [boss1.x, boss1.y]];
            }
        };
        boss1.refreshPixels();
        boss1.shoot = function() {
            if (boss1.status == 0) {
                for (var i = 0; i < boss1.guns.length; i++) {
                    enemyBullets.push(Bullet.createdNew(boss1.guns[i][0], boss1.guns[i][1], AIMBULLET));
                }
            } else {
                for (var i = 0; i < boss1.guns.length; i++) {
                    enemyBullets.push(Bullet.createdNew(boss1.guns[i][0], boss1.guns[i][1], UP));
                    enemyBullets.push(Bullet.createdNew(boss1.guns[i][0], boss1.guns[i][1], DOWN));
                    enemyBullets.push(Bullet.createdNew(boss1.guns[i][0], boss1.guns[i][1], LEFT));
                    enemyBullets.push(Bullet.createdNew(boss1.guns[i][0], boss1.guns[i][1], RIGHT));
                    enemyBullets.push(Bullet.createdNew(boss1.guns[i][0], boss1.guns[i][1], LEFTUP));
                    enemyBullets.push(Bullet.createdNew(boss1.guns[i][0], boss1.guns[i][1], LEFTDOWN));
                    enemyBullets.push(Bullet.createdNew(boss1.guns[i][0], boss1.guns[i][1], RIGHTUP));
                    enemyBullets.push(Bullet.createdNew(boss1.guns[i][0], boss1.guns[i][1], RIGHTDOWN));
                }
            }
        };
        boss1.next = function() {
            if (boss1.immuneTime > 0) {
                boss1.immuneTime--;
                boss1.move(DOWN);
            } else if (boss1.status == 1) {
                if (boss1.x > 8 && boss1.x != 17 && boss1.y != 17) boss1.move(LEFT);
                else if (boss1.x == 8 && boss1.y != 17) boss1.move(DOWN);
                else if (boss1.x != 17 && boss1.y == 17) boss1.move(RIGHT);
                else if (boss1.x == 17 && boss1.y != 8) boss1.move(UP);
                else if (boss1.x == 17 && boss1.y == 8) boss1.move(LEFT);
                if (boss1.count > 3) boss1.shoot();
                if (boss1.count > 15) boss1.count = 0;
                else boss1.count++;
            } else {
                if (boss1.count < 16) boss1.shoot();
                if (boss1.count > 20) boss1.count = 0;
                else boss1.count++;
            }
        };
        boss1.onDie = function() {
            stopShake();
        };
        return boss1;
    }
};
// ------------------------------------------------------------------------------------------------------------
$('body').append('<link rel="stylesheet" href="./game/game.css"><div id="game-layer" style="display:none;" onmousemove="mouseMove(event)"><div id="bar"/><div class="bar-text"><span class="shake-vertical" style="cursor: default;">SKILLS: PRESS <span class="key">Q</span>, <span class="key">W</span></span><span style="margin-right:10px; float:right; cursor:pointer;" onclick="endGame()"><b>EXIT</b> <span class="key">Esc</span></span></div><div class="canvas-holder"><canvas id="game-canvas" onclick="mouseClick()"/></div></div>');
var jlayer = $('#game-layer');
var jbar = jlayer.find('#bar');
var jcanvas = jlayer.find('#game-canvas');
var canvas = jcanvas[0];
var ctx = canvas.getContext("2d");
var pixelDisplayer = PixelDisplayer.createdNew();
// var filter = document.getElementById("game-filter");
var filter = new Image();
filter.onload = function() {
    imgLoaded();
}
filter.src = './game/game-filter.png';
var background = new Image();
background.onload = function() {
    jlayer.css('background', 'url("./game/game-background.png")');
    imgLoaded();
}
background.src = './game/game-background.png';

function imgLoaded() {
    if (typeof(loaded) != "boolean") loaded = true;
    else {
        removeLoader();
        showGame();
    }
}

function showGame() {
    screenSizeOld = 0;
    gameStatus = BEFORESTART;
    initial();
    resize();
    window.onresize = resize;
    jlayer.addClass('fade-in');
    jbar.addClass('bar-in');
    jcanvas.addClass('canvas-in');
    jlayer.show();
    setTimeout(function() {
        jbar.removeClass('bar-in');
        jcanvas.removeClass('canvas-in');
        jlayer.removeClass('fade-in');
        // $('#main-layer').hide();
        getPosition();
        playing = true;
    }, 1000);
    taskId = window.setInterval(beforeGame, 1000);
    // $('.background').addClass('blur');
}

function endGame() {
    stopShake();
    showMainLayer(); //$('#main-layer').show().removeClass('blur');
    jlayer.addClass('fade-out');
    jcanvas.addClass('canvas-out');
    setTimeout(function() {
        stopTask();
        playing = false;
        jlayer.hide().removeClass('fade-out');
        jcanvas.removeClass('canvas-out');
    }, 500);
    window.onresize = null;
}

function startShake() {
    jcanvas.addClass("shake");
}

function stopShake() {
    jcanvas.removeClass("shake");
}

function getPosition() {
    paddingTop = jcanvas.offset().top;
    paddingLeft = jcanvas.offset().left;
}

function resize() {
    var width = Math.max(window.innerWidth, 338);
    var height = Math.max(window.innerHeight - 20, 338);
    var screenSize = Math.min(width, height, 1080);
    if (screenSizeOld != screenSize) {
        screenSizeOld = screenSize;
        canvas.width = screenSize;
        canvas.height = screenSize;
        canvas.style.borderRadius = screenSize * 111 / 1080 + "px";
        pixelDisplayer.setSize(screenSize);
        canvasBackgroud = refreshBackground(screenSize);
        canvasFilter = refreshFilter(screenSize);
        refresh();
    }
    // paddingTop = 20 + (height - screenSize) / 2;
    // paddingLeft = (width - screenSize) / 2;
    // canvas.style.top = paddingTop + "px";
    // canvas.style.left = paddingLeft + "px";
    getPosition();
}

function mouseMove(e) {
    mouseX = e.clientX - pixelDisplayer.margin - paddingLeft;
    mouseY = e.clientY - pixelDisplayer.margin - paddingTop;
}

function mouseClick() {
    if (gameStatus == GAMEOVER || gameStatus == BEFORESTART) {
        stopTask();
        initial();
        gameStatus = GAMMING;
        taskId = window.setInterval(gameRun, 1000 / 60);
    }
}

function initial() {
    score = 0;
    mission = 1;
    myPlane = MyPlane.createdNew(12, 22);
    boss = null;
    bossIsOn = false;
    myBullets = new Array;
    enemyBullets = new Array;
    enemyGroup = new Array;
    mouseX = false;
    mouseY = false;
    frame = 0;
    bossCount = 0;
}

function beforeGame() {
    frame = 1 - frame;
    refresh();
}

function gameRun() {
    var orientation;
    var pixelSpace = pixelDisplayer.pixelInterval + pixelDisplayer.pixelSize;
    if (!mouseX || !mouseY) orientation = STOP;
    else if ((parseInt(mouseX / pixelSpace) < myPlane.x) && (parseInt(mouseY / pixelSpace) - 1 < myPlane.y)) orientation = LEFTUP;
    else if ((parseInt(mouseX / pixelSpace) < myPlane.x) && (parseInt(mouseY / pixelSpace) - 1 > myPlane.y)) orientation = LEFTDOWN;
    else if ((parseInt(mouseX / pixelSpace) > myPlane.x) && (parseInt(mouseY / pixelSpace) - 1 < myPlane.y)) orientation = RIGHTUP;
    else if ((parseInt(mouseX / pixelSpace) > myPlane.x) && (parseInt(mouseY / pixelSpace) - 1 > myPlane.y)) orientation = RIGHTDOWN;
    else if ((parseInt(mouseX / pixelSpace) < myPlane.x) && (parseInt(mouseY / pixelSpace) - 1 == myPlane.y)) orientation = LEFT;
    else if ((parseInt(mouseX / pixelSpace) == myPlane.x) && (parseInt(mouseY / pixelSpace) - 1 < myPlane.y)) orientation = UP;
    else if ((parseInt(mouseX / pixelSpace) > myPlane.x) && (parseInt(mouseY / pixelSpace) - 1 == myPlane.y)) orientation = RIGHT;
    else if ((parseInt(mouseX / pixelSpace) == myPlane.x) && (parseInt(mouseY / pixelSpace) - 1 > myPlane.y)) orientation = DOWN;
    else orientation = STOP;
    if (orientation != STOP) {
        myPlane.move(orientation);
        orientation = STOP;
    }
    if (bossCount == 1200) {
        bossCount = 0;
        bossIsOn = true;
    }
    if (bossIsOn && boss == null && enemyGroup.length == 0) {
        boss = Boss1.createdNew(12, -3);
    }
    if (frame % 60 == 0 && !bossIsOn) {
        frame = 0;
        var r = Math.random();
        if (r > 0.5) enemyGroup.push(Enemy1.createdNew(parseInt(Math.random() * 23) + 1, -1));
        else if (r > 0.1) enemyGroup.push(Enemy2.createdNew(parseInt(Math.random() * 23) + 1, -1));
        else {
            enemyGroup.push(Enemy3.createdNew(8, -1));
            enemyGroup.push(Enemy3.createdNew(16, -1));
        }
    }
    if (frame % 10 == 0) {
        myPlane.shoot();
    }
    if (frame % 15 == 0) {
        for (var i = 0; i < enemyGroup.length; i++) {
            enemyGroup[i].next();
            if (!enemyGroup[i].isInScreen()) {
                enemyGroup.splice(i, 1);
                i--;
            }
        }
        if (boss != null) {
            boss.next();
        }
    }
    //-----------------------------------------------------------
    for (var i = 0; i < enemyGroup.length; i++) {
        var n = enemyGroup[i].isShot();
        if (n != -1) {
            myBullets.splice(n, 1);
            enemyGroup[i].onDie();
            enemyGroup.splice(i, 1);
            i--;
            score += 5;
        }
    }
    if (boss != null) {
        var n = boss.isShot();
        if (n != -1) {
            myBullets.splice(n, 1);
            boss.getHurt();
            if (boss.dead) {
                boss.onDie();
                bossIsOn = false;
                mission++;
                boss = null;
            }
        }
    }
    for (var m = 0; m < myBullets.length; m++) {
        myBullets[m].next();
        if (!myBullets[m].isInScreen()) {
            myBullets.splice(m, 1);
            m--;
        }
    }
    for (var i = 0; i < enemyGroup.length; i++) {
        var n = enemyGroup[i].isShot();
        if (n != -1) {
            myBullets.splice(n, 1);
            enemyGroup[i].onDie();
            enemyGroup.splice(i, 1);
            i--;
            score += 5;
        }
    }
    if (boss != null) {
        var n = boss.isShot();
        if (n != -1) {
            myBullets.splice(n, 1);
            boss.getHurt();
            if (boss.dead) {
                boss.onDie();
                bossIsOn = false;
                mission++;
                boss = null;
            }
        }
    }
    //----------------------------------------------------
    if (myPlane.isShot() != -1) {
        gameover();
        return;
    }
    if (frame % 4 == 0) {
        for (var m = 0; m < enemyBullets.length; m++) {
            enemyBullets[m].next();
            if (!enemyBullets[m].isInScreen()) {
                enemyBullets.splice(m, 1);
                m--;
            }
        }
        if (myPlane.isShot() != -1) {
            gameover();
            return;
        }
    }
    frame++;
    if (!bossIsOn) bossCount++;
    refresh();
}

function gameover() {
    stopShake();
    stopTask();
    // initial();
    gameStatus = GAMEOVER;
    refresh();
}

function refreshScore() {
    if (score < 10000) {
        var a = parseInt(score / 1000);
        var b = parseInt((score % 1000) / 100);
        var c = parseInt(((score % 1000) % 100) / 10);
        var d = ((score % 1000) % 100) % 10;
    } else {
        var a = 9,
            b = 9,
            c = 9,
            d = 9;
    }
    ctx.fillStyle = '#202020';
    if (a != 0) {
        for (var i = 0; i < numPixel[a].length; i++) {
            pixelDisplayer.drawSmallUp(numPixel[a][i][0], numPixel[a][i][1], ctx);
        }
    }
    if (a != 0 || b != 0) {
        for (var i = 0; i < numPixel[b].length; i++) {
            pixelDisplayer.drawSmallUp(numPixel[b][i][0] + 4, numPixel[b][i][1], ctx);
        }
    }
    if (!(a == 0 && b == 0 && c == 0)) {
        for (var i = 0; i < numPixel[c].length; i++) {
            pixelDisplayer.drawSmallUp(numPixel[c][i][0] + 8, numPixel[c][i][1], ctx);
        }
    }
    for (var i = 0; i < numPixel[d].length; i++) {
        pixelDisplayer.drawSmallUp(numPixel[d][i][0] + 12, numPixel[d][i][1], ctx);
    }
}

function refreshMission() {
    if (mission < 100) {
        var a = parseInt(mission / 10);
        var b = mission % 10;
    } else {
        var a = 9,
            b = 9;
    }
    ctx.fillStyle = '#202020';
    if (a != 0) {
        for (var i = 0; i < numPixel[a].length; i++) {
            pixelDisplayer.drawSmallDown(numPixel[a][i][0], numPixel[a][i][1], ctx);
        }
    }
    for (var i = 0; i < numPixel[b].length; i++) {
        pixelDisplayer.drawSmallDown(numPixel[b][i][0] + 4, numPixel[b][i][1], ctx);
    }
}

function skill(skillCode) {
    if (gameStatus == GAMMING) myPlane.startSkill(skillCode);
}

function refreshBackground(screenSize) {
    var canvasBackgroud = document.createElement("canvas");
    canvasBackgroud.width = screenSize;
    canvasBackgroud.height = screenSize;
    var ctxBackground = canvasBackgroud.getContext("2d");
    ctxBackground.fillStyle = '#ffc960';
    // pixelDisplayer.drawBackground(ctxBackground);
    ctxBackground.fillRect(1, 1, screenSize - 2, screenSize - 2);
    ctxBackground.fillStyle = '#deb057';
    for (var m = 0; m < 25; m++) {
        for (var n = 0; n < 25; n++) {
            pixelDisplayer.draw(m, n, ctxBackground);
        }
    }
    for (var m = 0; m < 15; m++) {
        for (var n = 0; n < 5; n++) {
            pixelDisplayer.drawSmallUp(m, n, ctxBackground);
        }
    }
    for (var m = 0; m < 7; m++) {
        for (var n = 0; n < 5; n++) {
            pixelDisplayer.drawSmallDown(m, n, ctxBackground);
        }
    }
    pixelDisplayer.drawSkillCountLeft(3, ctxBackground);
    pixelDisplayer.drawSkillCountRight(3, ctxBackground);
    return canvasBackgroud;
}

function refresh() {
    ctx.drawImage(canvasBackgroud, 0, 0);
    //--------------------------------------------------------------
    if (gameStatus == GAMMING) {
        ctx.fillStyle = '#202020';
        for (var i = 0; i < myPlane.pixels.length; i++) {
            pixelDisplayer.draw(myPlane.pixels[i][0], myPlane.pixels[i][1], ctx);
        }
        for (var i = 0; i < enemyGroup.length; i++) {
            for (var m = 0; m < enemyGroup[i].pixels.length; m++) {
                pixelDisplayer.draw(enemyGroup[i].pixels[m][0], enemyGroup[i].pixels[m][1], ctx);
            }
        }
        for (var i = 0; i < myBullets.length; i++) {
            pixelDisplayer.draw(myBullets[i].x, myBullets[i].y, ctx);
        }
        if (boss != null) {
            for (var i = 0; i < boss.pixels.length; i++) {
                pixelDisplayer.draw(boss.pixels[i][0], boss.pixels[i][1], ctx);
            }
            if (boss.immuneTime == 0) {
                var bloodBarColor = ['#662d22', '#202020'];
                for (var n = boss.maxStatus; n >= 0; n--) {
                    ctx.fillStyle = bloodBarColor[n % 2];
                    for (var i = 0; i < 25 * boss.life[n] / boss.totalLife[n]; i++) {
                        pixelDisplayer.draw(i, 0, ctx);
                    }
                }
            }
        }
        //--------------------------------------------------
        ctx.fillStyle = '#662d22';
        for (var i = 0; i < enemyBullets.length; i++) {
            pixelDisplayer.draw(enemyBullets[i].x, enemyBullets[i].y, ctx);
        }
        //----------------------------------------------------
        refreshScore();
        refreshMission();
        pixelDisplayer.drawSkillCountLeft(myPlane.skillCount1, ctx);
        pixelDisplayer.drawSkillCountRight(myPlane.skillCount2, ctx);
    } else if (gameStatus == BEFORESTART && frame == 1) {
        ctx.fillStyle = '#202020';
        for (var i = 0; i < alphabetClick.C.length; i++) {
            pixelDisplayer.draw(alphabetClick.C[i][0] + 1, alphabetClick.C[i][1] + 10, ctx);
        }
        for (var i = 0; i < alphabetClick.L.length; i++) {
            pixelDisplayer.draw(alphabetClick.L[i][0] + 6, alphabetClick.L[i][1] + 10, ctx);
        }
        for (var i = 0; i < alphabetClick.I.length; i++) {
            pixelDisplayer.draw(alphabetClick.I[i][0] + 11, alphabetClick.I[i][1] + 10, ctx);
        }
        for (var i = 0; i < alphabetClick.C.length; i++) {
            pixelDisplayer.draw(alphabetClick.C[i][0] + 15, alphabetClick.C[i][1] + 10, ctx);
        }
        for (var i = 0; i < alphabetClick.K.length; i++) {
            pixelDisplayer.draw(alphabetClick.K[i][0] + 20, alphabetClick.K[i][1] + 10, ctx);
        }
    } else if (gameStatus == GAMEOVER) {
        refreshScore();
        refreshMission();
        pixelDisplayer.drawSkillCountLeft(myPlane.skillCount1, ctx);
        pixelDisplayer.drawSkillCountRight(myPlane.skillCount2, ctx);
        ctx.fillStyle = '#202020';
        for (var i = 0; i < alphabetGameOver.G.length; i++) {
            pixelDisplayer.draw(alphabetGameOver.G[i][0] + 1, alphabetGameOver.G[i][1] + 5, ctx);
        }
        for (var i = 0; i < alphabetGameOver.A.length; i++) {
            pixelDisplayer.draw(alphabetGameOver.A[i][0] + 7, alphabetGameOver.A[i][1] + 5, ctx);
        }
        for (var i = 0; i < alphabetGameOver.M.length; i++) {
            pixelDisplayer.draw(alphabetGameOver.M[i][0] + 13, alphabetGameOver.M[i][1] + 5, ctx);
        }
        for (var i = 0; i < alphabetGameOver.E.length; i++) {
            pixelDisplayer.draw(alphabetGameOver.E[i][0] + 19, alphabetGameOver.E[i][1] + 5, ctx);
        }
        for (var i = 0; i < alphabetGameOver.O.length; i++) {
            pixelDisplayer.draw(alphabetGameOver.O[i][0] + 1, alphabetGameOver.O[i][1] + 13, ctx);
        }
        for (var i = 0; i < alphabetGameOver.V.length; i++) {
            pixelDisplayer.draw(alphabetGameOver.V[i][0] + 7, alphabetGameOver.V[i][1] + 13, ctx);
        }
        for (var i = 0; i < alphabetGameOver.E.length; i++) {
            pixelDisplayer.draw(alphabetGameOver.E[i][0] + 13, alphabetGameOver.E[i][1] + 13, ctx);
        }
        for (var i = 0; i < alphabetGameOver.R.length; i++) {
            pixelDisplayer.draw(alphabetGameOver.R[i][0] + 19, alphabetGameOver.R[i][1] + 13, ctx);
        }
    }
    //----------------------------------------------------
    ctx.drawImage(canvasFilter, 0, 0);
}

function refreshFilter(screenSize) {
    var canvasFilter = document.createElement("canvas");
    canvasFilter.width = screenSize;
    canvasFilter.height = screenSize;
    var ctxFilter = canvasFilter.getContext("2d");
    ctxFilter.drawImage(filter, 0, 0, screenSize, screenSize);
    return canvasFilter;
}

function stopTask() {
    if (taskId != -1) {
        window.clearInterval(taskId);
        taskId = -1;
    }
}