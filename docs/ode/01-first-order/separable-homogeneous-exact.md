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
