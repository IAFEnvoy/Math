---
sidebar_position: 2
---

# 变量分离、齐次与恰当方程

## 变量分离方程

### 标准形式

$$\frac{dy}{dx} = f(x) \cdot g(y)$$

即右端可分解为只含 $x$ 的函数与只含 $y$ 的函数的乘积。

### 解法

当 $g(y) \neq 0$ 时，分离变量并积分：

$$\int \frac{dy}{g(y)} = \int f(x) \, dx + C$$

**注意**：若 $g(y_0) = 0$，则 $y \equiv y_0$（常值解）可能也是解，需单独检查是否被通解包含。

### 举例

求解 $\dfrac{dy}{dx} = ky$（指数增长模型）：

$$\int \frac{dy}{y} = \int k \, dx \quad\Longrightarrow\quad \ln|y| = kx + C \quad\Longrightarrow\quad y = Ce^{kx}$$

## 齐次方程

### 标准形式

$$\frac{dy}{dx} = F\!\left(\frac{y}{x}\right)$$

即右端可表示为 $\frac{y}{x}$ 的函数。

### 解法

设 $v = \dfrac{y}{x}$，即 $y = vx$，则 $\dfrac{dy}{dx} = v + x\dfrac{dv}{dx}$。代入原方程：

$$v + x\frac{dv}{dx} = F(v) \quad\Longrightarrow\quad \frac{dv}{F(v) - v} = \frac{dx}{x}$$

化为变量分离形式求解。

### 举例

求解 $\dfrac{dy}{dx} = \dfrac{x + y}{x - y}$：

$$F(v) = \frac{1+v}{1-v}, \quad v + xv' = \frac{1+v}{1-v}$$

$$xv' = \frac{1+v}{1-v} - v = \frac{1+v^2}{1-v}$$

$$\int \frac{1-v}{1+v^2} dv = \int \frac{dx}{x}$$

$$\arctan v - \frac{1}{2}\ln(1+v^2) = \ln|x| + C$$

代回 $v = y/x$ 得隐式通解。

## 恰当方程（全微分方程）

### 标准形式

$$M(x, y)\,dx + N(x, y)\,dy = 0$$

满足**恰当性条件**：

$$\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$$

### 解法

存在函数 $u(x, y)$（势函数）使 $du = M\,dx + N\,dy = 0$。通解为 $u(x, y) = C$。

构造 $u$ 的方法：

$$u(x, y) = \int_{x_0}^{x} M(t, y)\,dt + \int_{y_0}^{y} N(x_0, s)\,ds$$

或

$$u(x, y) = \int M\,dx + h(y), \quad \text{其中 } \frac{\partial}{\partial y}\!\left(\int M\,dx\right) + h'(y) = N$$

### 积分因子

若方程不满足恰当条件，可乘入积分因子 $\mu(x, y)$ 使之化为恰当方程：

$$\frac{\partial (\mu M)}{\partial y} = \frac{\partial (\mu N)}{\partial x}$$

常见情形：

| 条件 | 积分因子 |
|---|---|
| $\dfrac{M_y - N_x}{N}$ 仅依赖于 $x$ | $\mu(x) = \exp\!\left(\int \dfrac{M_y - N_x}{N} dx\right)$ |
| $\dfrac{N_x - M_y}{M}$ 仅依赖于 $y$ | $\mu(y) = \exp\!\left(\int \dfrac{N_x - M_y}{M} dy\right)$ |

### 举例

求解 $(2xy + y^2)\,dx + (x^2 + 2xy)\,dy = 0$：

$M = 2xy + y^2$，$N = x^2 + 2xy$，检查 $\partial M/\partial y = 2x + 2y = \partial N/\partial x$，是恰当方程。

$$u = \int M\,dx = x^2y + xy^2 + h(y), \quad \frac{\partial u}{\partial y} = x^2 + 2xy + h'(y) = N$$

故 $h'(y) = 0$，$u(x, y) = x^2y + xy^2 = C$ 为通解。

## 变量替换法

除上述标准解法外，**变量替换**是最通用的化归策略——通过巧妙选取新变量，将"不标准"的方程化为已掌握的分离变量型或线性型。

### 核心思想

观察方程的对称结构，用一个组合量替换 $x$ 和 $y$，使方程在新变量下齐次或可分离。

### 常用替换

以下三种替换涵盖了大量可化归为一阶可解型的方程：

#### 1. $u = \dfrac{y}{x}$（齐次方程的推广）

当右端可写成仅依赖于 $\frac{y}{x}$ 的形式时使用（见上文齐次方程）。更一般地，形如

$$\frac{dy}{dx} = \frac{a_1 x + b_1 y + c_1}{a_2 x + b_2 y + c_2}$$

的方程，当 $\det\!\begin{pmatrix} a_1 & b_1 \\ a_2 & b_2 \end{pmatrix} \neq 0$ 时，先平移消去常数项，再令 $u = \frac{Y}{X}$ 化为齐次。

#### 2. $u = y - x$（差型替换）

适用形式：右端仅依赖于 $y - x$ 的方程

$$\frac{dy}{dx} = f(y - x)$$

令 $u = y - x$，则 $\dfrac{du}{dx} = \dfrac{dy}{dx} - 1$，代入得：

$$\frac{du}{dx} + 1 = f(u) \quad\Longrightarrow\quad \frac{du}{f(u) - 1} = dx$$

化为变量分离形式。

**举例**：求解 $\dfrac{dy}{dx} = (y - x)^2$。

令 $u = y - x$，$u' = y' - 1$，代入得 $u' + 1 = u^2$：

$$\frac{du}{u^2 - 1} = dx \quad\Longrightarrow\quad \frac{1}{2}\ln\!\left|\frac{u-1}{u+1}\right| = x + C$$

代回 $u = y - x$ 得隐式通解：

$$\frac{y - x - 1}{y - x + 1} = C e^{2x}$$

#### 3. $u = xy$（积型替换）

适用形式：右端可重组为依赖于 $xy$ 的表达式的方程

$$\frac{dy}{dx} = \frac{y}{x} \cdot g(xy)$$

或更一般的乘积形式。令 $u = xy$，则 $y = \frac{u}{x}$，$\dfrac{dy}{dx} = \dfrac{x u' - u}{x^2}$，代入可化简。

典型场景：形如 $x\dfrac{dy}{dx} + y = f(xy)$ 的方程（注意左端恰为 $(xy)'$），令 $u = xy$ 直接得：

$$\frac{du}{dx} = f(u) \quad\Longrightarrow\quad \int \frac{du}{f(u)} = x + C$$

**举例**：求解 $x\dfrac{dy}{dx} + y = 2xy$。

注意到 $x y' + y = (xy)'$。令 $u = xy$：

$$\frac{du}{dx} = 2u \quad\Longrightarrow\quad u = C e^{2x} \quad\Longrightarrow\quad y = \frac{C e^{2x}}{x}$$

### 替换思路总结

| 观察特征 | 选取替换 | 化归目标 |
|---|---|---|
| 右端为 $F(\frac{y}{x})$ | $u = \frac{y}{x}$ | 变量分离 |
| 右端仅含 $y - x$ | $u = y - x$ | 变量分离 |
| 方程含 $(xy)'$ 或可重组为 $F(xy)$ | $u = xy$ | 变量分离 |
| 含 $ax+by$ 的线性组合 | $u = ax+by$ | 变量分离 |
| 伯努利 $y' + Py = Qy^n$ | $v = y^{1-n}$ | 一阶线性 |

**核心策略**：找到一个组合量 $u$，使原方程在新变量下的形式比原变量更简单——通常是化为可分离变量型或线性型。
