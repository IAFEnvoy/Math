---
sidebar_position: 3
---

# 欧拉方程

欧拉方程（Euler-Cauchy Equation）是一类特殊的变系数线性方程，其特点是每一项的 $x$ 的幂次恰好等于 $y$ 的导数阶数。通过变量代换 $x = e^t$ 可将其化为常系数线性方程。

## 标准形式

$$x^n y^{(n)} + a_{n-1} x^{n-1} y^{(n-1)} + \cdots + a_1 x y' + a_0 y = f(x)$$

其中 $a_0, a_1, \ldots, a_{n-1}$ 为常数。

**识别特征**：每一项形如 $x^k y^{(k)}$——$x$ 的指数等于导数的阶数。

## 二阶欧拉方程

### 齐次形式

$$x^2 y'' + a x y' + b y = 0 \qquad (x > 0)$$

### 解法一：指数代换 $x = e^t$

令 $x = e^t$（即 $t = \ln x$）。由链式法则：

$$\frac{dy}{dx} = \frac{dy}{dt} \cdot \frac{dt}{dx} = \frac{1}{x} \frac{dy}{dt}$$

$$\frac{d^2 y}{dx^2} = \frac{d}{dx}\!\left(\frac{1}{x}\frac{dy}{dt}\right) = -\frac{1}{x^2}\frac{dy}{dt} + \frac{1}{x^2}\frac{d^2 y}{dt^2}$$

代入原方程：

$$\frac{d^2 y}{dt^2} + (a - 1)\frac{dy}{dt} + b y = 0$$

这是常系数线性方程！

### 特征方程

对应的特征方程为：

$$r^2 + (a - 1)r + b = 0$$

或直接用试探解 $y = x^r$ 代入，得：

$$r(r-1) + a r + b = 0 \quad\Longrightarrow\quad r^2 + (a-1)r + b = 0$$

### 通解分类（二阶）

设特征根为 $r_1, r_2$：

| 情形 | 两个线性无关解 | 通解 |
|---|---|---|
| 两不等实根 | $x^{r_1}, x^{r_2}$ | $y = C_1 x^{r_1} + C_2 x^{r_2}$ |
| 二重实根 $r$ | $x^{r}, x^{r}\ln x$ | $y = (C_1 + C_2 \ln x)\,x^{r}$ |
| 共轭复根 $\alpha \pm i\beta$ | $x^{\alpha}\cos(\beta\ln x), x^{\alpha}\sin(\beta\ln x)$ | $y = x^{\alpha}[C_1\cos(\beta\ln x) + C_2\sin(\beta\ln x)]$ |

## 举例

### 例 1：不等实根

$$x^2 y'' - 2x y' + 2y = 0$$

设 $y = x^r$：$r(r-1) - 2r + 2 = r^2 - 3r + 2 = 0 \Rightarrow r_1 = 1, r_2 = 2$。

通解：$y = C_1 x + C_2 x^2$。

### 例 2：二重实根

$$x^2 y'' + x y' = 0$$

特征方程：$r(r-1) + r = r^2 = 0 \Rightarrow r = 0$（二重）。

通解：$y = C_1 + C_2 \ln x$。

### 例 3：非齐次欧拉方程

$$x^2 y'' + x y' - y = x$$

先用 $x = e^t$ 化为常系数：$y_{tt} - y = e^t$（注意：$x = e^t$）。

齐次部分：$r^2 - 1 = 0 \Rightarrow r = \pm 1$，$y_h = C_1 e^t + C_2 e^{-t}$。

特解：设 $y_p = A t e^t$，代入得 $A = 1/2$，$y_p = \frac{1}{2} t e^t$。

$$y = C_1 e^t + C_2 e^{-t} + \frac{1}{2}t e^t = C_1 x + \frac{C_2}{x} + \frac{x \ln x}{2}$$

## 高阶欧拉方程

$n$ 阶欧拉方程：

$$x^n y^{(n)} + a_{n-1} x^{n-1} y^{(n-1)} + \cdots + a_0 y = 0$$

令 $x = e^t$，化为常系数 $n$ 阶线性方程。其**特征多项式**为：

$$r(r-1)\cdots(r-n+1) + a_{n-1}r(r-1)\cdots(r-n+2) + \cdots + a_1 r + a_0 = 0$$

## 总结

| 方法 | 适用条件 | 核心代换 |
|---|---|---|
| 指数代换 | $x > 0$ | $x = e^t$，化为常系数 |
| 试探解 | 齐次 | $y = x^r$，直接求特征根 |
