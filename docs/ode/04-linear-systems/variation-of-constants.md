---
sidebar_position: 3
---

# 常数变易法

常数变易法（Variation of Constants / Variation of Parameters）是求解非齐次线性方程组 $X' = A(t)X + f(t)$ 的通用方法——将齐次通解中的常数向量改为待定函数向量。

## 核心思想

已知齐次方程的基解矩阵 $\Phi(t)$，齐次通解为 $X_h = \Phi(t)C$。对非齐次方程，设：

$$X(t) = \Phi(t) \cdot C(t)$$

其中 $C(t)$ 是待定的向量函数（"常数变易"）。

## 推导

代入 $X' = A(t)X + f(t)$：

$$\Phi'(t)C(t) + \Phi(t)C'(t) = A(t)\Phi(t)C(t) + f(t)$$

由 $\Phi'(t) = A(t)\Phi(t)$（每列都是齐次方程的解），$\Phi'(t)C = A\Phi C$，上式化简为：

$$\Phi(t)C'(t) = f(t)$$

因此：

$$C'(t) = \Phi^{-1}(t) f(t)$$

$$C(t) = \int_{t_0}^{t} \Phi^{-1}(s) f(s)\,ds + K$$

## 常数变易公式

> **非齐次通解公式**：
> $$X(t) = \Phi(t)K + \Phi(t)\int_{t_0}^{t} \Phi^{-1}(s) f(s)\,ds$$
>
> 其中第一项为齐次通解，第二项为非齐次特解（$K = 0$ 时满足零初值条件）。
>
> **带初值的形式**：若 $X(t_0) = X_0$，则
> $$X(t) = \Phi(t)\Phi^{-1}(t_0)X_0 + \Phi(t)\int_{t_0}^{t} \Phi^{-1}(s) f(s)\,ds$$

## 常系数情形

当 $A$ 为常数矩阵时，$\Phi(t) = e^{At}$。常数变易公式简化为：

$$X(t) = e^{At}K + e^{At}\int_{t_0}^{t} e^{-As} f(s)\,ds$$

或更紧凑地：

$$X(t) = e^{A(t-t_0)}X_0 + \int_{t_0}^{t} e^{A(t-s)} f(s)\,ds$$

## 标量情形的常数变易法

对于**标量** $n$ 阶线性方程：

$$y^{(n)} + a_{n-1}y^{(n-1)} + \cdots + a_0y = f(x)$$

已知齐次通解 $y_h = C_1 y_1 + \cdots + C_n y_n$，设非齐次特解：

$$y_p = u_1(x)y_1 + \cdots + u_n(x)y_n$$

其中 $u_i'(x)$ 满足：

$$\begin{pmatrix}
y_1 & y_2 & \cdots & y_n \\
y_1' & y_2' & \cdots & y_n' \\
\vdots & \vdots & \ddots & \vdots \\
y_1^{(n-1)} & y_2^{(n-1)} & \cdots & y_n^{(n-1)}
\end{pmatrix}
\begin{pmatrix} u_1' \\ u_2' \\ \vdots \\ u_n' \end{pmatrix} =
\begin{pmatrix} 0 \\ 0 \\ \vdots \\ f(x) \end{pmatrix}$$

即 Wronskian 矩阵 × $(u_i') = (0, \ldots, 0, f)^\top$。

## 二阶标量方程的常数变易公式

对于 $y'' + p(x)y' + q(x)y = f(x)$，已知齐次的两个线性无关解 $y_1, y_2$：

$$y_p = -y_1 \int \frac{y_2 f}{W} dx + y_2 \int \frac{y_1 f}{W} dx$$

其中 $W = y_1 y_2' - y_2 y_1'$ 是 Wronskian。

## 举例

求解 $y'' + y = \tan x$。

齐次解：$y_1 = \cos x$，$y_2 = \sin x$。$W = \cos^2 x + \sin^2 x = 1$。

$$y_p = -\cos x \int \frac{\sin x \tan x}{1} dx + \sin x \int \frac{\cos x \tan x}{1} dx$$

$$= -\cos x \int \frac{\sin^2 x}{\cos x} dx + \sin x \int \sin x \, dx$$

$$= -\cos x \left( \int (\sec x - \cos x) dx \right) - \sin x \cos x$$

$$= \cos x \cdot \ln|\cos x| - \cos x (-\sin x) - \sin x \cos x$$

最终特解 $y_p = \cos x \cdot \ln|\cos x|$。

通解：$y = C_1 \cos x + C_2 \sin x + \cos x \ln|\cos x|$。
