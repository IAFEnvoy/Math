---
sidebar_position: 5
---

# 参数表示法

当一阶方程不易直接解出 $y'$ 或不易用 $y = f(x)$ 表示时，可引入参数 $t$，将解表示为参数形式：

$$x = \varphi(t), \quad y = \psi(t)$$

这是处理某些特殊类型方程（如 Clairaut 方程、可解出 $x$ 或 $y$ 的隐式方程）的标准方法。

## 可解出 $y$ 的隐式方程

### 标准形式

$$y = f(x, y')$$

方程右端显含 $y'$，不便直接求解。

### 解法

令 $p = y'$，则 $y = f(x, p)$。两边对 $x$ 求导：

$$\frac{dy}{dx} = \frac{\partial f}{\partial x} + \frac{\partial f}{\partial p} \cdot \frac{dp}{dx}$$

而 $\dfrac{dy}{dx} = p$，故：

$$p = f_x + f_p \cdot \frac{dp}{dx}$$

这是关于 $x$ 和 $p$ 的一阶方程。若能解出 $p = p(x)$，则代入 $y = f(x, p)$ 得解。

若能解得 $x = \varphi(p)$，则得到**参数表示**：

$$\begin{cases} x = \varphi(p) \\ y = f(\varphi(p), p) \end{cases}$$

其中 $p$ 为参数。

## 可解出 $x$ 的隐式方程

### 标准形式

$$x = g(y, y')$$

### 解法

令 $p = y'$，则 $x = g(y, p)$。两边对 $y$ 求导，注意 $\dfrac{dx}{dy} = \dfrac{1}{p}$：

$$\frac{1}{p} = \frac{\partial g}{\partial y} + \frac{\partial g}{\partial p} \cdot \frac{dp}{dy}$$

化为关于 $y$ 和 $p$ 的一阶方程。解出 $p = p(y)$ 后代回得解；或得参数表示 $y = \psi(p), x = g(\psi(p), p)$。

## Clairaut 方程

### 标准形式

$$y = x y' + f(y')$$

这是可解出 $y$ 的特殊情况，其中 $y = xp + f(p)$。

### 解法

令 $p = y'$，则 $y = xp + f(p)$。两边对 $x$ 求导：

$$p = p + x\frac{dp}{dx} + f'(p)\frac{dp}{dx}$$

化简：

$$\left[x + f'(p)\right]\frac{dp}{dx} = 0$$

两种情况：

**情形一**：$\dfrac{dp}{dx} = 0 \Rightarrow p = C$（常数）。

代回 $y = xp + f(p)$ 得**通解**：

$$y = Cx + f(C)$$

这是一族直线。

**情形二**：$x + f'(p) = 0 \Rightarrow x = -f'(p)$。

得到**奇解**（参数形式）：

$$\begin{cases} x = -f'(p) \\[4pt] y = -p f'(p) + f(p) \end{cases}$$

奇解是通解直线族的**包络线**。

### 举例

求解 $y = xy' + \dfrac{1}{y'}$（$f(p) = \dfrac{1}{p}$）。

通解：$y = Cx + \dfrac{1}{C}$。

奇解：$x = -f'(p) = \dfrac{1}{p^2}$，$y = -p \cdot \left(-\dfrac{1}{p^2}\right) + \dfrac{1}{p} = \dfrac{2}{p}$。

消去 $p$：由 $p = \dfrac{2}{y}$，$x = \dfrac{y^2}{4}$，即 $y^2 = 4x$。

通解直线族 $y = Cx + 1/C$ 和奇解抛物线 $y^2 = 4x$。可以验证奇解是通解的包络线。

## 不显含 $x$ 或 $y$ 的方程的参数化

### 不显含 $y$：$F(x, y') = 0$

若能解出 $y' = \varphi(x)$，则直接积分。若不便解出，引入参数 $t$：

设 $y' = \psi(t)$（适当选取），则 $x$ 由 $F(x, \psi(t)) = 0$ 解出 $x = \varphi(t)$。再由 $dy = y' dx = \psi(t) \varphi'(t) dt$ 得：

$$y = \int \psi(t) \varphi'(t) dt + C$$

得参数解 $(x, y) = (\varphi(t), \int \psi\varphi' dt + C)$。

### 不显含 $x$：$F(y, y') = 0$

类似地，设 $y' = \psi(t)$，$y$ 由 $F(y, \psi(t)) = 0$ 解出 $y = \omega(t)$，再由 $dx = dy / y'$ 得 $x$。

## 举例

求解 $x = (y')^3 + y'$。

这是可解出 $x$ 的隐式方程：$x = p^3 + p$（$p = y'$）。

对 $y$ 求导：$\dfrac{dx}{dy} = \dfrac{1}{p} = (3p^2 + 1) \cdot \dfrac{dp}{dy}$。

$$\frac{dp}{dy} \cdot p (3p^2 + 1) = 1 \quad\Longrightarrow\quad \frac{dy}{dp} = p(3p^2 + 1)$$

$$y = \int p(3p^2 + 1) dp = \frac{3}{4}p^4 + \frac{1}{2}p^2 + C$$

参数解：

$$\begin{cases} x = p^3 + p \\[4pt] y = \dfrac{3}{4}p^4 + \dfrac{1}{2}p^2 + C \end{cases}$$

## 方法总结

| 方程类型 | 方法 | 参数化步骤 |
|---|---|---|
| $y = f(x, y')$ | 令 $p = y'$，对 $x$ 求导 | $x = \varphi(p)$，$y = f(\varphi(p), p)$ |
| $x = g(y, y')$ | 令 $p = y'$，对 $y$ 求导 | $y = \psi(p)$，$x = g(\psi(p), p)$ |
| Clairaut：$y = xy' + f(y')$ | $\frac{dp}{dx}=0$ 或 $x+f'(p)=0$ | 通解 $y=Cx+f(C)$，奇解 $( -f'(p), -p f'(p)+f(p) )$ |
| $F(x, y') = 0$ | 设 $y' = \psi(t)$，解 $x$ | $x = \varphi(t)$，$y = \int \psi \varphi' dt + C$ |
| $F(y, y') = 0$ | 设 $y' = \psi(t)$，解 $y$ | $y = \omega(t)$，$x = \int \omega'/\psi \, dt + C$ |
