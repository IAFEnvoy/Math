---
sidebar_position: 3
---

# 一阶线性方程（积分因子法）

一阶线性微分方程是所有 ODE 解法中最基础也最常用的——它有一套统一、机械的解法。

## 标准形式

$$\frac{dy}{dx} + P(x)\,y = Q(x)$$

其中 $P(x), Q(x)$ 在某个区间上连续。

- $Q(x) \equiv 0$ 时称为**齐次**线性方程（注意这里的"齐次"与之前的齐次含义不同）
- $Q(x) \not\equiv 0$ 时称为**非齐次**线性方程

## 通解公式（积分因子法）

### 第一步：求积分因子

$$\mu(x) = \exp\!\left(\int P(x)\,dx\right)$$

注意 $\mu(x) > 0$ 恒成立。

### 第二步：两边乘积分因子

$$\mu(x)\frac{dy}{dx} + \mu(x)P(x)y = \mu(x)Q(x)$$

左端恰为乘积的导数：

$$\frac{d}{dx}\bigl[\mu(x)\,y\bigr] = \mu(x)Q(x)$$

### 第三步：积分求解

$$y(x) = \frac{1}{\mu(x)}\left[\int \mu(x)Q(x)\,dx + C\right]$$

**记忆公式**：
$$y = e^{-\int P dx} \left[ \int Q \, e^{\int P dx} \, dx + C \right]$$

## 通解结构

由通解公式可得：

$$y(x) = \underbrace{C e^{-\int P\,dx}}_{\text{齐次通解 } y_h} + \underbrace{e^{-\int P\,dx} \int Q \, e^{\int P\,dx} dx}_{\text{非齐次特解 } y_p}$$

- 齐次通解 $y_h$：含一个任意常数，构成一维线性空间
- 非齐次特解 $y_p$：不带任意常数
- 通解 = $y_h + y_p$

## 初值问题

$$y' + P(x)y = Q(x), \quad y(x_0) = y_0$$

解为：

$$y(x) = e^{-\int_{x_0}^x P(t)\,dt} \left[ y_0 + \int_{x_0}^x Q(s)\, e^{\int_{x_0}^s P(t)\,dt} \, ds \right]$$

## 经典例子

### 例 1：基础求解

$$y' + 2xy = x$$

$\mu(x) = e^{\int 2x\,dx} = e^{x^2}$。

$$y = e^{-x^2}\left[ \int x e^{x^2} dx + C \right] = e^{-x^2}\left[ \frac{1}{2}e^{x^2} + C \right] = \frac{1}{2} + Ce^{-x^2}$$

### 例 2：初值问题

$$y' + \frac{1}{x}y = \frac{\sin x}{x}, \quad y(\pi) = 1$$

$\mu(x) = e^{\int \frac{1}{x}dx} = x$。

$$y = \frac{1}{x}\left[ \int \sin x \, dx + C \right] = \frac{-\cos x + C}{x}$$

由 $y(\pi) = 1$ 得 $C = \pi - 1$，故 $y = \dfrac{\pi - 1 - \cos x}{x}$。

## 积分因子法的几何理解

积分因子 $\mu(x)$ 使方程左端化为全微分，本质上是将非恰当方程"校正"为恰当方程。
